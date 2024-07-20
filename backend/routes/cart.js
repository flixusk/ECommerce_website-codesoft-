const express = require('express');
const router = express.Router();
const Cart = require('..'); // Ensure Cart model is defined
const User = require('../models/User'); // Ensure User model is defined
const jwt = require('jsonwebtoken'); // For token verification

router.post('/add', async (req, res) => {
  const { productId, quantity } = req.body;
  const token = req.header('x-auth-token');

  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    
    if (!user) return res.status(404).json({ msg: 'User not found' });

    let cart = await Cart.findOne({ user: user.id });

    if (!cart) {
      cart = new Cart({ user: user.id, items: [] });
    }

    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
