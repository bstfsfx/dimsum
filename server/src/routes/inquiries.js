const express = require('express');
const router = express.Router();

let inquiries = [];
let id = 1;

router.post('/', (req, res) => {
  const inquiry = {
    id: id++,
    name: req.body.name,
    message: req.body.message,
    createdAt: new Date().toISOString(),
  };
  inquiries.push(inquiry);
  res.status(201).json({ ok: true, data: inquiry });
});

router.get('/', (req, res) => {
  res.json({ ok: true, data: inquiries });
});

module.exports = router;