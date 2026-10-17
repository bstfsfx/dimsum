const express = require('express');
const router = express.Router();

let orders = [];
let orderId = 1;

router.post('/', (req, res) => {
  const order = {
    id: orderId++,
    items: req.body.items || [],
    total: req.body.total || 0,
    createdAt: new Date().toISOString(),
  };
  orders.push(order);
  res.status(201).json({ ok: true, data: order });
});

router.get('/', (req, res) => {
  res.json({ ok: true, data: orders });
});

module.exports = router;