const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    quote: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    avatar: { type: String, default: null },
    rating: { type: Number, default: 5, min: 1, max: 5 },
    order: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Testimonial', TestimonialSchema);