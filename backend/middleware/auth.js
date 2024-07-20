// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

module.exports = async (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ success: false, errors: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.user.id);
    next();
  } catch (err) {
    res.status(401).json({ success: false, errors: 'Token is not valid' });
  }
};
