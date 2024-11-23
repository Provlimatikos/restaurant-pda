const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const menuItems = [
    { id: '1', name: 'Spaghetti Bolognese', price: '€12.50' },
    { id: '2', name: 'Caesar Salad', price: '€8.00' },
  ];
  res.json(menuItems);
});

module.exports = router;