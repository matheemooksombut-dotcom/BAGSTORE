const crypto = require('crypto');
const Cart = require('../models/Cart');
const Order = require('../models/Order');
const asyncHandler = require('../src/utils/asyncHandler');
const ApiError = require('../src/utils/ApiError');

const createOrderNumber = () => {
  const date = new Date().toISOString().slice(0, 10).replaceAll('-', '');
  return `BAG-${date}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
};

const createOrder = asyncHandler(async (req, res) => {
  const { cartId, customer, paymentMethod = 'cod' } = req.body;

  if (!cartId || !customer) {
    throw new ApiError(400, 'cartId and customer are required');
  }

  const requiredCustomerFields = ['name', 'email', 'phone', 'address'];
  const missingField = requiredCustomerFields.find(
    (field) => !String(customer[field] || '').trim(),
  );

  if (missingField) {
    throw new ApiError(400, `customer.${missingField} is required`);
  }

  const cart = await Cart.findOne({ cartId });

  if (!cart || cart.items.length === 0) {
    throw new ApiError(400, 'Cart is empty');
  }

  const items = cart.items.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    colors: item.colors,
    img: item.img,
    quantity: item.quantity,
  }));

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shippingFee = Number(process.env.SHIPPING_FEE || 0);

  const order = await Order.create({
    orderNumber: createOrderNumber(),
    customer,
    items,
    subtotal,
    shippingFee,
    total: subtotal + shippingFee,
    paymentMethod,
  });

  cart.items = [];
  await cart.save();

  res.status(201).json({ success: true, data: order });
});

const getOrder = asyncHandler(async (req, res) => {
  const order = await Order.findOne({ orderNumber: req.params.orderNumber });

  if (!order) {
    throw new ApiError(404, 'Order not found');
  }

  res.json({ success: true, data: order });
});

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json({ success: true, count: orders.length, data: orders });
});

const updateOrderStatus = asyncHandler(async (req, res) => {
  const order = await Order.findOneAndUpdate(
    { orderNumber: req.params.orderNumber },
    { status: req.body.status },
    { new: true, runValidators: true },
  );

  if (!order) {
    throw new ApiError(404, 'Order not found');
  }

  res.json({ success: true, data: order });
});

module.exports = {
  createOrder,
  getOrder,
  getOrders,
  updateOrderStatus,
};
