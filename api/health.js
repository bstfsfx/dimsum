// Vercel Serverless Function — health check
// GET /api/health
module.exports = function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    ok: true,
    service: 'dimsum-api',
    time: new Date().toISOString(),
  });
};
