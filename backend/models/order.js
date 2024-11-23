const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  item: String,
  price: Number,
  status: String,
});

module.exports = mongoose.model('Order', orderSchema);