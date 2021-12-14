const salonShop = require('../models/salonowner');

const Order = require('../models/orderModel');
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;






exports.viewNewRequests = async (req,res)=>{
    try{
        const requests = await Order.find({salesowner : ObjectId(req.params.id) , order_status : 0}).populate('customer');

        res.status(200).json({
            status:'success',
           data: {
            requests
        }
    });
}catch (err){
    res.status(400).json({
        status : 'fail',
        message : err
    });
}
}


exports.viewAllCustomers = async (req,res)=>{
    try{
        const customers = await Order.find({salesowner : ObjectId(req.params.id)}).populate('customer');

        res.status(200).json({
            status:'success',
           data: {
            customers
        }
    });
}catch (err){
    res.status(400).json({
        status : 'fail',
        message : err
    });
}
}

exports.getAllSalonowner = async (req, res) => {
    try{  
    const stores = await salonShop.find(); 
    
         //send responce 
        res.status(200).json({
            status:'sucess',
           data: {
            stores
        }
    });
}catch (err){
    res.status(400).json({
        status : 'fail', 
        message : err
    });
}
}
exports.getSalonowner = async (req,res)=>{
    try{
        const store = await salonShop.findById(req.params.id);

        res.status(200).json({
            status:'sucess',
           data: {
            store
        }
    });
}catch (err){
    res.status(400).json({
        status : 'fail',
        message : err
    });
}
}



exports.createSalonowner = async (req,res)=>{
    try{
    
        const store = await salonShop.create(req.body);
       
         res.status(201).json({
            status:'success',
            data:{
                store 
            }
    });
}catch (err){
    res.status(400).json({
        status : 'fail',
        message : err
        
    });
}
};


exports.Login = async (req,res,next)=>{
    try{  
    const {email, password} = req.body;
    const user =  await salonShop.findOne({email : email, password : password});
        res.status(200).json({
            status:'success',
            data: {
                user      
            }
        });
    }catch (err){
        res.status(400).json({
            status : 'fail', 
            message :  err
        });
    }
    }


exports.updateSalonowner = async (req,res)=>{
    try{
        const store = await salonShop.findByIdAndUpdate(req.params.id, req.body,{
            new: true, 
            runValidators : true
        });
        res.status(200).json({
            status:'sucess',
           data: {
            store
        }
    });
}catch (err){
    res.status(400).json({
        status : 'fail', 
        message : err
    });
}
}
exports.deleteSalonowner = async (req,res)=>{
    try{
        const store = await salonShop.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status:'sucess',
           data: null
    });
}catch (err){
    res.status(400).json({
        status : 'fail', 
        message : err
    });
}
} 