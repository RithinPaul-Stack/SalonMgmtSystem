
const Order = require('./../models/orderModel');
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;


exports.createOrder = async (req,res)=>{
    try{
    
        const order =await Order.create(req.body);
       
         res.status(201).json({
            status:'success',
            data:{
                order
            }
    });
}catch (err){
    res.status(400).json({
        status : 'fail',
        message : err
        
    });
}
};

exports.updateOrder = async (req,res)=>{
    try{
        const order = await Order.findByIdAndUpdate(req.params.id, req.body,{
            new: true, 
            runValidators : true
        });
        res.status(200).json({
            status:'success',
           data: {
            order
        }
    });
}catch (err){
    res.status(400).json({
        status : 'fail', 
        message : err
    });
}
}


exports.getCustomerOrders = async (req,res)=>{
    try{
        const orders= await Order.find({customer : ObjectId(req.params.id)}).populate('salesowner');

        res.status(200).json({
            status:'success',
           data: {
              orders
        }
    });
}catch (err){
    res.status(400).json({
        status : 'fail',
        message : err
    });
}
}