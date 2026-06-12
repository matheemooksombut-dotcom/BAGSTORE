const Product = require('../models/Product');
const asyncHandler = require('../src/utils/asyncHandler');
const ApiError = require('../src/utils/ApiError');

const getProducts = asyncHandler(async (req, res) => {
  const filter = {};

  if (req.query.includeInactive !== 'true') {
    filter.isActive = true;
  }

  if (req.query.search) {
    filter.name = { $regex: req.query.search, $options: 'i' };
  }

  const products = await Product.find(filter).sort({ productId: 1 });
  res.json({ success: true, count: products.length, data: products });
});

const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findOne({ productId: Number(req.params.id) });

  if (!product) {
    throw new ApiError(404, 'Product not found');
  }

  res.json({ success: true, data: product });
});

const createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, data: product });
});

const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findOneAndUpdate(
    { productId: Number(req.params.id) },
    req.body,
    { new: true, runValidators: true },
  );

  if (!product) {
    throw new ApiError(404, 'Product not found');
  }

  res.json({ success: true, data: product });
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findOneAndUpdate(
    { productId: Number(req.params.id) },
    { isActive: false },
    { new: true },
  );

  if (!product) {
    throw new ApiError(404, 'Product not found');
  }

  res.json({ success: true, message: 'Product archived', data: product });
});

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
