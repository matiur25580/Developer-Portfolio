const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const allowedOrigins = (process.env.FRONTEND_ORIGINS || 'https://developer-portfolio-client.vercel.app')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.disable('x-powered-by');
app.set('trust proxy', 1);
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Origin is not allowed by CORS.'));
  },
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 600,
}));
app.use(express.json({ limit: '10kb' }));

app.use('/api/contact', require('./routes/contact'));

app.get('/api/health', (_req, res) => {
  const databaseReady = mongoose.connection.readyState === 1;
  res.set('Cache-Control', 'no-store');
  res.status(databaseReady ? 200 : 503).json({
    status: databaseReady ? 'ok' : 'unavailable',
    database: databaseReady ? 'connected' : 'disconnected',
  });
});

app.use((error, _req, res, _next) => {
  if (error.message === 'Origin is not allowed by CORS.') {
    return res.status(403).json({ success: false, error: 'Origin is not allowed.' });
  }
  if (error.type === 'entity.too.large') {
    return res.status(413).json({ success: false, error: 'Request body is too large.' });
  }
  console.error('API request failed:', error.message);
  return res.status(500).json({ success: false, error: 'Unable to process this request.' });
});

async function startServer() {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is required. Refusing to start without a database.');
  }

  await mongoose.connect(process.env.MONGO_URI);
  console.log('MongoDB connected');

  const port = Number(process.env.PORT) || 5000;
  return app.listen(port, () => console.log('Server running on port ' + port));
}

if (require.main === module) {
  startServer().catch((error) => {
    console.error('Server startup failed:', error.message);
    process.exitCode = 1;
  });
}

module.exports = { app, startServer };
