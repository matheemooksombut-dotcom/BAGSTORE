const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    price: Number,
    colors: String,
    img: String,
    quantity: Number,
  },
  { _id: false },
);

const orderSchema = new mongoose.Schema(
  {
    orderNumber: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    customer: {
      name: { type: String, required: true, trim: true },
      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },
      phone: { type: String, required: true, trim: true },
      address: { type: String, required: true, trim: true },
    },
    items: {
      type: [orderItemSchema],
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
      min: 0,
    },
    shippingFee: {
      type: Number,
      default: 0,
      min: 0,
    },
    total: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ['pending', 'paid', 'processing', 'shipped', 'completed', 'cancelled'],
      default: 'pending',
    },
    paymentMethod: {
      type: String,
      enum: ['cod', 'bank_transfer'],
      default: 'cod',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model('Order', orderSchema);
