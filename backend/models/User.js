const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Please provide an Your Name"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
  cartData: {
    type: Object,
  },
  date: {
    type:Date,
    default:date.now,
  }
});

module.exports = mongoose.models.Users || mongoose.model("Users", UserSchema);

