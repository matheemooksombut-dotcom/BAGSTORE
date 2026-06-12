const express = require('express');
const {
  createOrder,
  getOrder,
  getOrders,
  updateOrderStatus,
} = require('../controllers/orders');

const router = express.Router();

router.route('/').get(getOrders).post(createOrder);
router.get('/:orderNumber', getOrder);
router.patch('/:orderNumber/status', updateOrderStatus);

module.exports = router;
