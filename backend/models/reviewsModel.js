const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
  { 
    
    review:{
        type:String
    },
    customer : {
    type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    salesowner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Salon",
    }
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
