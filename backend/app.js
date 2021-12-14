const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');


 //const AppError = require('./utils/appError');
 const salonOwnerRouter = require('./routes/salonownerRoute');
 const reviewRouter = require('./routes/reviewsRoute');
const customerRouter = require('./routes/customerRoute');
const orderRoute = require('./routes/orderRoute');



const app = express();
app.use(express.json());

// Set security HTTP headers
app.use(helmet());
  
app.use(cors());
app.options("*",cors());
// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());



if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

 

 app.use('/api/v1/salon', salonOwnerRouter);
 app.use('/api/v1/review', reviewRouter);

 app.use('/api/v1/customer', customerRouter);
 app.use('/api/v1/order', orderRoute);



app.get('/',(req,res)=>{ res.send("salon management system works")});


module.exports = app;



