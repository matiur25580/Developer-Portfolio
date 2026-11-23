const express = require('express');
const crypto = require('node:crypto');
const Message = require('../models/Message');
const router = express.Router();

const TOKEN_TTL_SECONDS = 15 * 60;
const loginAttempts = new Map();
const LOGIN_WINDOW_MS = 15 * 60 * 1000;
const MAX_LOGIN_ATTEMPTS = 5;

function loginRateLimit(ip) {
  const now = Date.now();
  let entry = loginAttempts.get(ip);
  if (!entry || entry.resetAt <= now) entry = { count: 0, resetAt: now + LOGIN_WINDOW_MS };
  if (entry.count >= MAX_LOGIN_ATTEMPTS) {
    loginAttempts.set(ip, entry);
    return Math.ceil((entry.resetAt - now) / 1000);
  }
  entry.count += 1;
  if (loginAttempts.size > 10000) {
    for (const [key, value] of loginAttempts) if (value.resetAt <= now) loginAttempts.delete(key);
  }
  loginAttempts.set(ip, entry);
  return 0;
}

const submissionAttempts = new Map();
const SUBMISSION_WINDOW_MS = 15 * 60 * 1000;
const MAX_SUBMISSIONS = 5;

function submissionRateLimit(ip) {
  const now = Date.now();
  let entry = submissionAttempts.get(ip);
  if (!entry || entry.resetAt <= now) entry = { count: 0, resetAt: now + SUBMISSION_WINDOW_MS };
  if (entry.count >= MAX_SUBMISSIONS) {
    submissionAttempts.set(ip, entry);
    return Math.ceil((entry.resetAt - now) / 1000);
  }
  entry.count += 1;
  if (submissionAttempts.size > 10000) {
    for (const [key, value] of submissionAttempts) {
      if (value.resetAt <= now) submissionAttempts.delete(key);
    }
  }
  submissionAttempts.set(ip, entry);
  return 0;
}

function configuredSecrets() {
  return Boolean(process.env.ADMIN_PASS && process.env.ADMIN_SESSION_SECRET && process.env.ADMIN_SESSION_SECRET.length >= 32);
}

function safeEqual(left, right) {
  const a = crypto.createHash('sha256').update(String(left)).digest();
  const b = crypto.createHash('sha256').update(String(right)).digest();
  return crypto.timingSafeEqual(a, b);
}

function issueAdminToken() {
  const payload = Buffer.from(JSON.stringify({ exp: Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS })).toString('base64url');
  const signature = crypto.createHmac('sha256', process.env.ADMIN_SESSION_SECRET).update(payload).digest('base64url');
  return payload + '.' + signature;
}

function requireAdmin(req, res, next) {
  if (!configuredSecrets()) {
    return res.status(503).json({ success: false, error: 'Admin authentication is not configured.' });
  }

  const authorization = req.get('authorization') || '';
  const match = authorization.match(/^Bearer ([A-Za-z0-9_.-]+)$/);
  if (!match) return res.status(401).json({ success: false, error: 'Authentication required.' });

  const [payload, signature, extra] = match[1].split('.');
  if (!payload || !signature || extra) return res.status(401).json({ success: false, error: 'Invalid or expired admin session.' });

  const expected = crypto.createHmac('sha256', process.env.ADMIN_SESSION_SECRET).update(payload).digest('base64url');
  if (!safeEqual(signature, expected)) return res.status(401).json({ success: false, error: 'Invalid or expired admin session.' });

  try {
    const claims = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (!Number.isInteger(claims.exp) || claims.exp <= Math.floor(Date.now() / 1000)) {
      return res.status(401).json({ success: false, error: 'Invalid or expired admin session.' });
    }
  } catch {
    return res.status(401).json({ success: false, error: 'Invalid or expired admin session.' });
  }

  next();
}

router.post('/admin/login', (req, res) => {
  if (!configuredSecrets()) {
    return res.status(503).json({ success: false, error: 'Admin authentication is not configured.' });
  }
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const retryAfter = loginRateLimit(ip);
  if (retryAfter > 0) {
    res.set('Retry-After', String(retryAfter));
    return res.status(429).json({ success: false, error: 'Too many login attempts. Try again later.' });
  }
  const password = typeof req.body?.password === 'string' ? req.body.password : '';
  if (!password || !safeEqual(password, process.env.ADMIN_PASS)) {
    return res.status(401).json({ success: false, error: 'Invalid admin credentials.' });
  }
  loginAttempts.delete(ip);
  res.set('Cache-Control', 'no-store');
  res.json({ success: true, token: issueAdminToken(), expiresIn: TOKEN_TTL_SECONDS });
});

router.post('/', async (req, res) => {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const retryAfter = submissionRateLimit(ip);
  if (retryAfter > 0) {
    res.set('Retry-After', String(retryAfter));
    return res.status(429).json({ success: false, error: 'Too many submissions. Try again later.' });
  }

  try {
    const name = typeof req.body?.name === 'string' ? req.body.name.trim() : '';
    const email = typeof req.body?.email === 'string' ? req.body.email.trim() : '';
    const message = typeof (req.body?.msg ?? req.body?.message) === 'string' ? (req.body.msg ?? req.body.message).trim() : '';
    if (!name || name.length > 120 || !email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message || message.length > 5000) {
      return res.status(400).json({ success: false, error: 'Please provide a valid name, email, and message.' });
    }
    const saved = await Message.create({ name, email, message });
    res.status(201).json({ success: true, data: { id: saved._id } });
  } catch (error) {
    console.error('Contact message creation failed:', error.message);
    res.status(500).json({ success: false, error: 'Unable to submit your message right now.' });
  }
});

router.get('/', requireAdmin, async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    const messages = await Message.find().select('name email message createdAt').sort({ createdAt: -1 }).limit(500).lean();
    res.json(messages);
  } catch (error) {
    console.error('Contact message retrieval failed:', error.message);
    res.status(500).json({ success: false, error: 'Unable to retrieve messages.' });
  }
});

router.delete('/:id', requireAdmin, async (req, res) => {
  if (!/^[a-fA-F0-9]{24}$/.test(req.params.id)) {
    return res.status(400).json({ success: false, error: 'Invalid message identifier.' });
  }
  try {
    const deleted = await Message.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, error: 'Message not found.' });
    res.json({ success: true });
  } catch (error) {
    console.error('Contact message deletion failed:', error.message);
    res.status(500).json({ success: false, error: 'Unable to delete the message.' });
  }
});

router.delete('/', requireAdmin, async (req, res) => {
  try {
    const result = await Message.deleteMany({});
    res.json({ success: true, deletedCount: result.deletedCount });
  } catch (error) {
    console.error('Contact message bulk deletion failed:', error.message);
    res.status(500).json({ success: false, error: 'Unable to delete messages.' });
  }
});

module.exports = router;
