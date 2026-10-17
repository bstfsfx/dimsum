const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/contentController');

router.get('/hero', ctrl.getHero);
router.get('/pain-points', ctrl.getPainPoints);
router.get('/products', ctrl.getProducts);
router.get('/solution', ctrl.getSolution);
router.get('/service-icons', ctrl.getServiceIcons);
router.get('/testimonials', ctrl.getTestimonials);
router.get('/faqs', ctrl.getFAQs);
router.get('/all', ctrl.getAll);

module.exports = router;