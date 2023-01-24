const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

//MongoDB connection
mongoose.connect('mongodb+srv://mahima:5688699@cluster0.cb9rhah.mongodb.net/Car-rental?retryWrites=true&w=majority', (err)=> {
  if (!err)
    console.log('MongoDB successfully connected!');
  else
    console.log('Error in DB connection: ' +JSON.stringify(err, undefined, 2));
});

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(express.json());

const carRoutes = require('./routes/cars');
app.use('/api/cars', carRoutes);

app.listen(3000, ()=>{
  console.log('Server connected');
});


app.get('/', (req, res)=>{
  res.status(200).json({
    msg: 'Hello mahima !!'
  });
});


