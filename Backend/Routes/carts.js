const express = require('express');
const {
  getCart,
  addCartItem,
  updateCartItem,
  removeCartItem,
  clearCart,
} = require('../controllers/carts');

const router = express.Router();

router.route('/:cartId').get(getCart).delete(clearCart);
router.post('/:cartId/items', addCartItem);
router.patch('/:cartId/items/:itemId', updateCartItem);
router.delete('/:cartId/items/:itemId', removeCartItem);

module.exports = router;
