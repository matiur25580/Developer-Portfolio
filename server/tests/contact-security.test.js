const test = require('node:test');
const assert = require('node:assert/strict');

process.env.ADMIN_PASS = 'test-only-admin-password';
process.env.ADMIN_SESSION_SECRET = 'test-only-session-secret-that-is-at-least-32-characters';
process.env.FRONTEND_ORIGINS = 'https://developer-portfolio-client.vercel.app';

const { app } = require('../server');

let server;
let baseUrl;

test.before(async () => {
  server = app.listen(0);
  await new Promise((resolve) => server.once('listening', resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

test.after(async () => {
  if (server) await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
});

async function request(path, options = {}, ip = '198.51.100.10') {
  const headers = { 'x-forwarded-for': ip, ...(options.headers || {}) };
  return fetch(baseUrl + path, { ...options, headers });
}

test('contact inbox and deletion endpoints reject anonymous requests', async () => {
  const list = await request('/api/contact');
  assert.equal(list.status, 401);

  const one = await request('/api/contact/507f1f77bcf86cd799439011', { method: 'DELETE' });
  assert.equal(one.status, 401);

  const all = await request('/api/contact', { method: 'DELETE' });
  assert.equal(all.status, 401);
});

test('admin login fails closed when either secret is missing', async () => {
  const saved = process.env.ADMIN_SESSION_SECRET;
  delete process.env.ADMIN_SESSION_SECRET;
  try {
    const response = await request('/api/contact/admin/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ password: 'anything' }),
    });
    assert.equal(response.status, 503);
  } finally {
    process.env.ADMIN_SESSION_SECRET = saved;
  }
});

test('admin login rejects invalid credentials and issues a short-lived bearer token for valid credentials', async () => {
  const invalid = await request('/api/contact/admin/login', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ password: 'incorrect' }),
  }, '198.51.100.11');
  assert.equal(invalid.status, 401);

  const valid = await request('/api/contact/admin/login', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ password: 'test-only-admin-password' }),
  }, '198.51.100.12');
  assert.equal(valid.status, 200);
  const data = await valid.json();
  assert.equal(data.success, true);
  assert.match(data.token, /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/);
  assert.equal(data.expiresIn, 900);
  assert.equal(valid.headers.get('cache-control'), 'no-store');
});

test('admin login throttles repeated invalid attempts', async () => {
  const ip = '198.51.100.13';
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const response = await request('/api/contact/admin/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ password: 'wrong' }),
    }, ip);
    assert.equal(response.status, 401);
  }
  const blocked = await request('/api/contact/admin/login', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ password: 'wrong' }),
  }, ip);
  assert.equal(blocked.status, 429);
  assert.ok(Number(blocked.headers.get('retry-after')) > 0);
});

test('contact validation rejects malformed submissions without exposing database errors', async () => {
  const response = await request('/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ name: '', email: 'not-an-email', msg: '' }),
  });
  assert.equal(response.status, 400);
  assert.deepEqual(await response.json(), {
    success: false,
    error: 'Please provide a valid name, email, and message.',
  });
});

test('public contact submission rate limit blocks requests after five attempts', async () => {
  const ip = '198.51.100.14';
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const response = await request('/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name: '', email: 'invalid', msg: '' }),
    }, ip);
    assert.equal(response.status, 400);
  }
  const blocked = await request('/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ name: '', email: 'invalid', msg: '' }),
  }, ip);
  assert.equal(blocked.status, 429);
  assert.ok(Number(blocked.headers.get('retry-after')) > 0);
});

test('CORS allows the configured portfolio origin and rejects unknown origins', async () => {
  const allowed = await request('/api/health', {
    headers: { origin: 'https://developer-portfolio-client.vercel.app' },
  }, '198.51.100.15');
  assert.equal(allowed.headers.get('access-control-allow-origin'), 'https://developer-portfolio-client.vercel.app');

  const blocked = await request('/api/health', {
    headers: { origin: 'https://untrusted.example' },
  }, '198.51.100.16');
  assert.equal(blocked.status, 403);
  assert.equal(blocked.headers.get('access-control-allow-origin'), null);
});

test('health endpoint reports disconnected database as unavailable', async () => {
  const response = await request('/api/health', {}, '198.51.100.17');
  assert.equal(response.status, 503);
  assert.deepEqual(await response.json(), { status: 'unavailable', database: 'disconnected' });
});
