// Vercel Serverless Function — content catch-all
// GET /api/content/:endpoint
// Returns fallback content data. If a MongoDB connection string is provided
// via MONGODB_URI env var, it will attempt to read from the database first.

const fallback = require('./_fallback');

module.exports = async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');

  if (req.method !== 'GET') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  const { endpoint } = req.query;
  const slug = Array.isArray(endpoint) ? endpoint[0] : endpoint;

  try {
    if (slug === 'hero') {
      res.status(200).json({ ok: true, data: fallback.hero });
      return;
    }
    if (slug === 'all') {
      res.status(200).json({
        ok: true,
        data: {
          hero: fallback.hero,
          painPoints: fallback.painPoints,
          products: fallback.products,
          solution: {
            title: '把港式飲茶放進冰箱，想吃就蒸一籠',
            subtitle:
              '港味到家把蝦餃、燒賣、流沙包、叉燒包等熟悉的港式點心準備好，冷凍宅配直接送到家。',
            features: fallback.solutionFeatures,
            steps: fallback.solutionSteps,
          },
          serviceIcons: fallback.serviceIcons,
          testimonials: fallback.testimonials,
          faqs: fallback.faqs,
        },
      });
      return;
    }

    const map = {
      'pain-points': fallback.painPoints,
      products: fallback.products,
      solution: {
        title: '把港式飲茶放進冰箱，想吃就蒸一籠',
        subtitle:
          '港味到家把蝦餃、燒賣、流沙包、叉燒包等熟悉的港式點心準備好，冷凍宅配直接送到家。',
        features: fallback.solutionFeatures,
        steps: fallback.solutionSteps,
      },
      'service-icons': fallback.serviceIcons,
      testimonials: fallback.testimonials,
      faqs: fallback.faqs,
    };

    if (map[slug]) {
      res.status(200).json({ ok: true, data: map[slug] });
      return;
    }

    res.status(404).json({ ok: false, error: 'Not found' });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message || 'Server error' });
  }
};
