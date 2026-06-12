const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ quiet: true });

const app = require('./src/app');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

const startServer = async () => {
  if (!MONGO_URI) {
    throw new Error('MONGO_URI is not set. Add it to Backend/.env');
  }

  await mongoose.connect(MONGO_URI, {
    dbName: process.env.MONGO_DB_NAME || 'Cart',
  });
  console.log('MongoDB connected');

  app.listen(PORT, () => {
    console.log(`API running at http://localhost:${PORT}`);
  });
};

startServer().catch((error) => {
  console.error(`Unable to start server: ${error.message}`);
  process.exit(1);
});
