import React, { createContext, useReducer, useEffect, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.name === action.payload.name);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.name === action.payload.name
              ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: action.payload.quantity || 1 }],
      };

    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(item => item.name !== action.payload.name) };

    case 'UPDATE_CART_ITEM':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.name === action.payload.name
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case 'INIT_CART':
      return { ...state, cart: action.payload };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  useEffect(() => {
    // Retrieve cart from sessionStorage on component mount
    const savedCart = sessionStorage.getItem('cart');
    if (savedCart) {
      dispatch({ type: 'INIT_CART', payload: JSON.parse(savedCart) });
    }
  }, []);

  useEffect(() => {
    // Save cart to sessionStorage whenever it changes
    sessionStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
