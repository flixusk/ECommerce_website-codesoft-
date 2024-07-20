const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 1) middleware
app.use(cors);
app.use(express.json());

// 2) routes

// 3) mongodb connection
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// global error
app.use((err, res, req, next) => {
  err.statuCode == err.statuCode || 500;
  err.status = err.status || 'error';

  res.status(err.statuCode).json({
    status: err.status,
    message: err.message,
  })
})

  const PORT = 3000;
  app.listen(PORT, ()=> {
    console.log('App is running on ${PORT}');
  });