// Vercel Serverless Function — content catch-all
// GET /api/content/:endpoint
// Returns fallback content data. If a MongoDB connection string is provided
// via MONGODB_URI env var, it will attempt to read from the database first.

const mongoose = require('mongoose');
const fallback = require('./_fallback');

let connectionPromise = null;

async function connectIfNeeded() {
  if (!process.env.MONGODB_URI) return false;
  if (connectionPromise) return connectionPromise;
  connectionPromise = mongoose
    .connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 3000,
    })
    .then(() => true)
    .catch(() => false);
  return connectionPromise;
}

function isDbReady() {
  return mongoose.connection && mongoose.connection.readyState === 1;
}

async function safeQuery(model, sort, fallbackData) {
  if (!isDbReady()) return fallbackData;
  try {
    const docs = await Promise.race([
      model.find({ active: { $ne: false } }).sort(sort).lean().exec(),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('db query timeout')), 1500)
      ),
    ]);
    return docs.length ? docs : fallbackData;
  } catch (err) {
    return fallbackData;
  }
}

module.exports = async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');

  if (req.method !== 'GET') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  await connectIfNeeded();

  const { endpoint } = req.query;
  const slug = Array.isArray(endpoint) ? endpoint[0] : endpoint;

  try {
    if (slug === 'hero') {
      const data = await safeQuery({ find: () => ({}) }, {}, fallback.hero);
      res.status(200).json({ ok: true, data: data.find ? data.find()[0] || fallback.hero : data });
      return;
    }
    if (slug === 'all') {
      const HeroContent = mongoose.models.HeroContent || mongoose.model('HeroContent', new mongoose.Schema({}, { strict: false }));
      const PainPoint = mongoose.models.PainPoint || mongoose.model('PainPoint', new mongoose.Schema({}, { strict: false }));
      const Product = mongoose.models.Product || mongoose.model('Product', new mongoose.Schema({}, { strict: false }));
      const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', new mongoose.Schema({}, { strict: false }));
      const FAQ = mongoose.models.FAQ || mongoose.model('FAQ', new mongoose.Schema({}, { strict: false }));

      const [hero, painPoints, products, testimonials, faqs] = await Promise.all([
        safeQuery(HeroContent, { order: 1 }, [fallback.hero]).then((r) => r[0] || fallback.hero),
        safeQuery(PainPoint, { order: 1 }, fallback.painPoints),
        safeQuery(Product, { order: 1 }, fallback.products),
        safeQuery(Testimonial, { order: 1 }, fallback.testimonials),
        safeQuery(FAQ, { order: 1 }, fallback.faqs),
      ]);

      res.status(200).json({
        ok: true,
        data: {
          hero,
          painPoints,
          products,
          solution: {
            title: '把港式飲茶放進冰箱，想吃就蒸一籠',
            subtitle:
              '港味到家把蝦餃、燒賣、流沙包、叉燒包等熟悉的港式點心準備好，冷凍宅配直接送到家。',
            features: fallback.solutionFeatures,
            steps: fallback.solutionSteps,
          },
          serviceIcons: fallback.serviceIcons,
          testimonials,
          faqs,
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
