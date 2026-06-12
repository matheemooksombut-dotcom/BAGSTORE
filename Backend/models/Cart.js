const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    colors: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
      max: 99,
    },
  },
  { _id: true },
);

const cartSchema = new mongoose.Schema(
  {
    cartId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    items: {
      type: [cartItemSchema],
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: 'carts',
  },
);

cartSchema.virtual('totalQuantity').get(function getTotalQuantity() {
  return this.items.reduce((total, item) => total + item.quantity, 0);
});

cartSchema.virtual('subtotal').get(function getSubtotal() {
  return this.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
});

cartSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Cart', cartSchema);
