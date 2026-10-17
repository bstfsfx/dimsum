const mongoose = require('mongoose');
const fallback = require('../data/fallback');

function isDbReady() {
  return mongoose.connection && mongoose.connection.readyState === 1;
}

async function safeQuery(model, { sort = { order: 1 } } = {}, fallbackData) {
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
    console.warn(`[content] db query → fallback (${err.message})`);
    return fallbackData;
  }
}

exports.getHero = async (req, res) => {
  const data = await safeQuery(require('../models/HeroContent'), {}, fallback.hero);
  res.json({ ok: true, data });
};

exports.getPainPoints = async (req, res) => {
  const data = await safeQuery(require('../models/PainPoint'), {}, fallback.painPoints);
  res.json({ ok: true, data });
};

exports.getProducts = async (req, res) => {
  const data = await safeQuery(require('../models/Product'), {}, fallback.products);
  res.json({ ok: true, data });
};

exports.getSolution = async (req, res) => {
  res.json({
    ok: true,
    data: {
      title: '把港式飲茶放進冰箱，想吃就蒸一籠',
      subtitle:
        '港味到家把蝦餃、燒賣、流沙包、叉燒包等熟悉的港式點心準備好，冷凍宅配直接送到家。',
      features: fallback.solutionFeatures,
      steps: fallback.solutionSteps,
    },
  });
};

exports.getServiceIcons = async (req, res) => {
  res.json({ ok: true, data: fallback.serviceIcons });
};

exports.getTestimonials = async (req, res) => {
  const data = await safeQuery(require('../models/Testimonial'), {}, fallback.testimonials);
  res.json({ ok: true, data });
};

exports.getFAQs = async (req, res) => {
  const data = await safeQuery(require('../models/FAQ'), {}, fallback.faqs);
  res.json({ ok: true, data });
};

exports.getAll = async (req, res) => {
  try {
    const [hero, painPoints, products, testimonials, faqs] = await Promise.all([
      safeQuery(require('../models/HeroContent'), {}, fallback.hero),
      safeQuery(require('../models/PainPoint'), {}, fallback.painPoints),
      safeQuery(require('../models/Product'), {}, fallback.products),
      safeQuery(require('../models/Testimonial'), {}, fallback.testimonials),
      safeQuery(require('../models/FAQ'), {}, fallback.faqs),
    ]);
    res.json({
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
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
};