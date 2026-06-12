const express = require('express');
const cors = require('cors');
const productRoutes = require('../Routes/products');
const cartRoutes = require('../Routes/carts');
const orderRoutes = require('../Routes/orders');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();

const allowedOrigins = (process.env.CLIENT_URL || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim());

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error('Origin is not allowed by CORS'));
    },
  }),
);
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'BAGSTORE API is running' });
});

app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/orders', orderRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
