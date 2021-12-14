const Reviews = require('./../models/reviewsModel');
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;




exports.createReview = async (req,res)=>{
    try{
    
        const review =await Reviews.create(req.body);
       
         res.status(201).json({
            status:'success',
            data:{
                review
            }
    });
}catch (err){
    res.status(400).json({
        status : 'fail',
        message : err
        
    });
}
};


exports.viewAllReviews = async (req,res)=>{
    try{
        const reviews = await Reviews.find({salesowner : ObjectId(req.params.id)}).populate('salesowner');

        res.status(200).json({
            status:'success',
           data: {
            reviews
        }
    });
}catch (err){
    res.status(400).json({
        status : 'fail',
        message : err
    });
}
}

exports.viewAllReviewsBySaloon = async (req,res)=>{
    try{
        const reviews = await Reviews.find({salesowner : ObjectId(req.params.id)}).populate('customer');

        res.status(200).json({
            status:'success',
           data: {
            reviews
        }
    });
}catch (err){
    res.status(400).json({
        status : 'fail',
        message : err
    });
}
}
