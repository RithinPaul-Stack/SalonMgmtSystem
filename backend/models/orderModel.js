const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  { 
      order_status: {
          type:Number,
          default :0
      },
      date:{
        type:String
    },
    time:{
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

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
