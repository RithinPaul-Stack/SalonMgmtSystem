const dotnv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotnv.config({ path: './.env' });

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DB_HOST}/salon-management` ||'mongodb://mongo:27017' 

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 9990;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
mongoose.Promise = global.Promise;

