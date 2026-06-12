const test = require('node:test');
const assert = require('node:assert/strict');
const Product = require('../models/Product');
const Cart = require('../models/Cart');

test('product requires at least one variant', () => {
  const product = new Product({
    productId: 99,
    name: 'Test bag',
    price: 300,
    stock: 10,
    variants: [],
  });

  const error = product.validateSync();
  assert.match(error.errors.variants.message, /At least one product variant/);
});

test('cart calculates quantity and subtotal', () => {
  const cart = new Cart({
    cartId: 'test-cart',
    items: [
      {
        id: 1,
        name: 'Product1',
        price: 300,
        colors: 'orange',
        img: '/bag1.png',
        quantity: 2,
      },
    ],
  });

  assert.equal(cart.totalQuantity, 2);
  assert.equal(cart.subtotal, 600);
});
