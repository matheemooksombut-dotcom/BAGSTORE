const Cart = require('../models/Cart');
const asyncHandler = require('../src/utils/asyncHandler');
const ApiError = require('../src/utils/ApiError');

const findOrCreateCart = async (cartId) => {
  let cart = await Cart.findOne({ cartId });

  if (!cart) {
    cart = await Cart.create({ cartId, items: [] });
  }

  return cart;
};

const getCart = asyncHandler(async (req, res) => {
  const cart = await findOrCreateCart(req.params.cartId);
  res.json({ success: true, data: cart });
});

const addCartItem = asyncHandler(async (req, res) => {
  const id = Number(req.body.id);
  const price = Number(req.body.price);
  const quantity = Number(req.body.quantity || 1);
  const name = String(req.body.name || '').trim();
  const colors = String(req.body.colors || '').trim();
  const img = String(req.body.img || '').trim();

  if (!Number.isInteger(id) || !Number.isFinite(price)) {
    throw new ApiError(400, 'id and price must be valid numbers');
  }

  if (!name || !colors || !img) {
    throw new ApiError(400, 'name, colors and img are required');
  }

  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
    throw new ApiError(400, 'Quantity must be an integer between 1 and 99');
  }

  const cart = await findOrCreateCart(req.params.cartId);
  const existingItem = cart.items.find(
    (item) => item.id === id && item.colors === colors,
  );
  const newQuantity = (existingItem?.quantity || 0) + quantity;

  if (newQuantity > 99) {
    throw new ApiError(400, 'Cart item quantity cannot exceed 99');
  }

  if (existingItem) {
    existingItem.name = name;
    existingItem.price = price;
    existingItem.img = img;
    existingItem.quantity = newQuantity;
  } else {
    cart.items.push({ id, name, price, colors, img, quantity });
  }

  await cart.save();
  res.status(201).json({ success: true, data: cart });
});

const updateCartItem = asyncHandler(async (req, res) => {
  const quantity = Number(req.body.quantity);

  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
    throw new ApiError(400, 'Quantity must be an integer between 1 and 99');
  }

  const cart = await Cart.findOne({ cartId: req.params.cartId });

  if (!cart) {
    throw new ApiError(404, 'Cart not found');
  }

  const item = cart.items.id(req.params.itemId);

  if (!item) {
    throw new ApiError(404, 'Cart item not found');
  }

  item.quantity = quantity;
  await cart.save();

  res.json({ success: true, data: cart });
});

const removeCartItem = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ cartId: req.params.cartId });

  if (!cart) {
    throw new ApiError(404, 'Cart not found');
  }

  const item = cart.items.id(req.params.itemId);

  if (!item) {
    throw new ApiError(404, 'Cart item not found');
  }

  item.deleteOne();
  await cart.save();

  res.json({ success: true, data: cart });
});

const clearCart = asyncHandler(async (req, res) => {
  const cart = await findOrCreateCart(req.params.cartId);
  cart.items = [];
  await cart.save();

  res.json({ success: true, data: cart });
});

module.exports = {
  getCart,
  addCartItem,
  updateCartItem,
  removeCartItem,
  clearCart,
};
