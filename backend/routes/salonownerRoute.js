var express = require('express');
var router = express.Router();

const salonController = require ('../controllers/salonownerController');

router
    .route('/')
    .get( salonController.getAllSalonowner)
    .post(salonController.createSalonowner)


router
    .route('/login')
    .post(salonController.Login)

router
    .route('/:id')
    .get(salonController.getSalonowner)
    .patch(salonController.updateSalonowner)
    .delete(salonController.deleteSalonowner);


router
    .route('/new/:id')
    .get(salonController.viewNewRequests)

router
    .route('/all/:id')
    .get(salonController.viewAllCustomers)


    module.exports = router;






    