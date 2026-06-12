const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Product = require('../models/Product');
const products = require('../data/products');

dotenv.config({ quiet: true });

const seed = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is not set');
  }

  await mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.MONGO_DB_NAME || 'bagstore',
  });
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log(`Seeded ${products.length} products`);
  await mongoose.disconnect();
};

seed().catch(async (error) => {
  console.error(`Seed failed: ${error.message}`);
  await mongoose.disconnect();
  process.exit(1);
});
