const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import cors
const paymentRoutes = require('./middleware/payment');

dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// Database connection
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/products', require('./routes/products'));
app.use('/api', paymentRoutes);
//app.use('/api/cart', require('./routes/cart'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
