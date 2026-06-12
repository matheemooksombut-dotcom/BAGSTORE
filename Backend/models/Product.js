const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema(
  {
    color: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false },
);

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: Number,
      required: true,
      unique: true,
      min: 1,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    description: {
      type: String,
      default: '',
      trim: true,
      maxlength: 2000,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    variants: {
      type: [variantSchema],
      validate: {
        validator: (variants) => variants.length > 0,
        message: 'At least one product variant is required',
      },
    },
    hoverImage: {
      type: String,
      default: '',
      trim: true,
    },
    stock: {
      type: Number,
      default: 0,
      min: 0,
      validate: {
        validator: Number.isInteger,
        message: 'Stock must be an integer',
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model('Product', productSchema);
