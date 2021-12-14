const express = require('express');
const router= express.Router();
const reviewController = require ('../controllers/reviewController');

router
    .route('/')
    //.get( reviewController.getAllPrivacypolicy)
    .post(reviewController.createReview)


router
    .route('/salon/:id')
    .get(reviewController.viewAllReviewsBySaloon)



module.exports = router;