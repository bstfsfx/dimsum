require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const connectDB = require('./config/db');
const contentRoutes = require('./routes/content');
const orderRoutes = require('./routes/orders');
const inquiryRoutes = require('./routes/inquiries');

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: CORS_ORIGIN.split(',').map((s) => s.trim()),
    credentials: true,
  })
);
app.use(morgan('dev'));

// Serve built React app (production)
const clientDist = path.join(__dirname, '../../client/dist');
app.use(express.static(clientDist));

// Serve image assets from the client's public folder (single source of truth)
const clientImages = path.join(__dirname, '../../client/public/images');
app.use('/images', express.static(clientImages));

// API routes
app.use('/api/content', contentRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/inquiries', inquiryRoutes);

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'dimsum-api', time: new Date().toISOString() });
});

// SPA fallback
app.get(/^\/(?!api).*/, (req, res, next) => {
  const indexFile = path.join(clientDist, 'index.html');
  res.sendFile(indexFile, (err) => {
    if (err) next();
  });
});

// 404 for unknown API routes
app.use('/api', (req, res) => {
  res.status(404).json({ ok: false, error: 'Not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('[error]', err);
  res.status(500).json({ ok: false, error: err.message || 'Server error' });
});

(async () => {
  connectDB(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/hongkong_dimsum').catch(
    (err) => console.warn('[server] db init error:', err.message)
  );
  app.listen(PORT, () => {
    console.log(`[server] listening on http://localhost:${PORT}`);
    console.log(`[server] CORS origin: ${CORS_ORIGIN}`);
  });
})();