const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const stripe = require('stripe')('your_stripe_secret_key');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/order');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/restaurant', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/menu', menuRoutes);
app.use('/order', orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});