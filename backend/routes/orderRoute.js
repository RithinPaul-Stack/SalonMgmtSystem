const express = require('express');
const router= express.Router();
const OrderController = require ('../controllers/orderController');

router
    .route('/')
    //.get( OrderController.getAllPrivacypolicy)
    .post(OrderController.createOrder)


router
    .route('/:id')
    // .get(OrderController.getPrivacypolicy)
    .patch(OrderController.updateOrder)
    //.delete(OrderController.deletePrivacypolicy);

router
    .route('/customer/:id')
    .get(OrderController.getCustomerOrders)



module.exports = router;