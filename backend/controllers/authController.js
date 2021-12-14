const User = require('./../models/userModel');


exports.Signup = async(req,res,next) =>{
    try{ 
        
    const newUser = await User.create(req.body);

     res.status(200).json({
        status : 'success',
        data:{
            newUser
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
    const user =  await User.findOne({email : email, password : password});
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
