const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/create-payment-intent', async (req, res) => {
  const { amount, paymentMethodId } = req.body;

  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true, // Automatically confirm the payment
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never'
      }
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
      success: true,
    });
  } catch (error) {
    console.error('[Error]', error);
    res.status(500).send({
      error: error.message,
    });
  }
});

module.exports = router;
