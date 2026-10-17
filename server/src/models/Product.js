const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    badge: { type: String, default: null },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    priceLabel: { type: String, required: true },
    priceFrom: { type: Number },
    priceTo: { type: Number },
    ctaLabel: { type: String, default: '立即選購' },
    ctaVariant: {
      type: String,
      enum: ['primary', 'secondary', 'line'],
      default: 'primary',
    },
    ctaTarget: { type: String, default: '#products' },
    tag: { type: String, default: null },
    order: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);