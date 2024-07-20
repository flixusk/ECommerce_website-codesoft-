const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User =require('../models/userModel')
const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ success: false, errors: 'User already exists' });
    }

    // Empty cart data
    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ success: true, token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, errors: 'Server error' });
  }
});

// Login Route
// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, errors: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, errors: 'Invalid Credentials' });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ success: true, token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, errors: 'Server error' });
  }
});

module.exports = router;
