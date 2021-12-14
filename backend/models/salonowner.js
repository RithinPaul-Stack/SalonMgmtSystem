const mongoose = require('mongoose');

const SalonSchema = new mongoose.Schema(
  { 
    role:{
      type:String,
    },
    name: {
      type: String,
    },
    email:{
      type:String
    },
    timings:{
      type:String
    },
    password : {
      type:String
    }
  },
  {
    timestamps: true,
  }
);
const Salon = mongoose.model('Salon', SalonSchema);

module.exports = Salon;
