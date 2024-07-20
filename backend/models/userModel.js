const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {  // Changed to camelCase
    type: String,
    required: [true, 'Please provide your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: [true, 'Email already exists'],  // Adjusted error message
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  cart: {
    type: Map,
    of: Number,
    default: {}, // Added default value if `cartData` is not provided
  },
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);  // Changed to singular "User"
