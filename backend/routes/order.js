const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.post('/', (req, res) => {
  const newOrder = new Order(req.body);
  newOrder.save()
    .then(order => res.json(order))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/payment', async (req, res) => {
  const { amount, token } = req.body;
  try {
    const charge = await stripe.charges.create({
      amount,
      currency: 'eur',
      description: 'Restaurant Order',
      source: token,
    });
    res.json(charge);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;