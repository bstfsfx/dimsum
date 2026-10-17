const mongoose = require('mongoose');
const connectDB = require('./config/db');
const fallback = require('./data/fallback');

const Product = require('./models/Product');
const Testimonial = require('./models/Testimonial');
const FAQ = require('./models/FAQ');
const PainPoint = require('./models/PainPoint');
const HeroContent = require('./models/HeroContent');

async function seed() {
  require('dotenv').config();
  await connectDB(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/hongkong_dimsum');

  if (mongoose.connection.readyState !== 1) {
    console.error('[seed] MongoDB not connected — aborting.');
    process.exit(1);
  }

  await Promise.all([
    Product.deleteMany({}),
    Testimonial.deleteMany({}),
    FAQ.deleteMany({}),
    PainPoint.deleteMany({}),
    HeroContent.deleteMany({}),
  ]);

  await HeroContent.create(fallback.hero);

  await Product.insertMany(
    fallback.products.map((p, i) => ({ ...p, order: i }))
  );
  await Testimonial.insertMany(
    fallback.testimonials.map((t, i) => ({ ...t, order: i }))
  );
  await FAQ.insertMany(
    fallback.faqs.map((f, i) => ({ ...f, order: i }))
  );
  await PainPoint.insertMany(
    fallback.painPoints.map((p, i) => ({ ...p, order: i }))
  );

  console.log('[seed] inserted: hero, products, testimonials, faqs, pain points');
  process.exit(0);
}

seed().catch((err) => {
  console.error('[seed] error:', err);
  process.exit(1);
});