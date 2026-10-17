const mongoose = require('mongoose');

const HeroContentSchema = new mongoose.Schema(
  {
    eyebrow: { type: String, default: '' },
    headlineTop: { type: String, required: true },
    headlineAccent: { type: String, required: true },
    subtitle: { type: String, required: true },
    ctaLabel: { type: String, required: true },
    ctaTarget: { type: String, default: '#products' },
    image: { type: String, required: true },
    badges: [
      {
        icon: { type: String, default: 'truck' },
        label: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('HeroContent', HeroContentSchema);