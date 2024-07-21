import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

// Load your Stripe public key
const stripePromise = loadStripe('pk_test_51PJBPpSHyiY2xyXcARsIThezwn9qvHSpKZjnOAalp0xUmPoXWy1yDSx9OMRbmnZWwCrRVln2pMnNmNM6GL4ReclT00PsyYDL1y');

const CheckoutForm = ({ handleClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { state } = useCart();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log('[Error]', error);
      alert(`Payment failed: ${error.message}`);
      return;
    }

    try {
      const response = await fetch('https://ecommerce-website-codesoft.onrender.com/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: Math.round(state.cart.reduce((total, item) => total + parseFloat(item.price.replace(/[^0-9.-]+/g, '')) * item.quantity, 0) * 100),
          paymentMethodId: paymentMethod.id,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const paymentResponse = await response.json();

      if (paymentResponse.error) {
        console.log('[Payment Error]', paymentResponse.error);
        alert(`Payment failed: ${paymentResponse.error.message}`);
      } else {
        console.log('[Payment Success]', paymentResponse);
        alert('Payment successful!');
        navigate('/'); // Redirect to homepage after successful payment
      }
    } catch (error) {
      console.log('[Error]', error);
      alert(`Payment failed: ${error.message}`);
    }
  };

  return (
    <div className="p-6 border rounded-lg shadow-lg bg-white max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Enter Your Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <CardElement className="border p-2 rounded" />
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            disabled={!stripe}
            className="bg-blue-500 text-white px-6 py-3 rounded shadow-md hover:bg-blue-600 transition duration-300"
          >
            Pay
          </button>
          <button
            onClick={handleClose}
            className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition duration-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const CartPage = () => {
  const { state, dispatch } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleRemoveFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity <= 0) return; // Prevent setting quantity to zero or negative
    dispatch({ type: 'UPDATE_CART_ITEM', payload: { ...item, quantity: newQuantity } });
  };

  const calculateTotalPrice = () => {
    return state.cart.reduce((total, item) => {
      const itemPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, '')); // Convert price string to number
      if (isNaN(itemPrice)) return total; // Skip if price is not a valid number
      return total + itemPrice * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {state.cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border-b">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.brand}</p>
                <p className="text-green-500 font-bold">
                  ${(parseFloat(item.price.replace(/[^0-9.-]+/g, '')) * item.quantity).toFixed(2)}
                </p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleQuantityChange(item, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="bg-gray-300 text-gray-800 px-2 py-1 rounded mr-2"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item, item.quantity + 1)}
                    className="bg-gray-300 text-gray-800 px-2 py-1 rounded ml-2"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6 p-4 border-t">
            <h2 className="text-xl font-bold">Total:</h2>
            <p className="text-xl font-bold text-green-500">${calculateTotalPrice()}</p>
          </div>
          {!showCheckout ? (
            <button
              className="mt-6 bg-blue-500 text-white px-6 py-3 rounded shadow-md hover:bg-blue-600 transition duration-300"
              onClick={() => setShowCheckout(true)}
            >
              Proceed to Checkout
            </button>
          ) : (
            <Elements stripe={stripePromise}>
              <CheckoutForm handleClose={() => setShowCheckout(false)} />
            </Elements>
          )}
        </div>
      )}
    </div>
  );
};

export default CartPage;
