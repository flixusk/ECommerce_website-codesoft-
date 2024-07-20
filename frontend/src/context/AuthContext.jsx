import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import axios from 'axios';

const AuthContext = createContext();

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'USER_LOADED':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case 'AUTH_ERROR':
    case 'LOGIN_FAIL':
    case 'LOGOUT':
    case 'REGISTER_FAIL':
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadUser = async () => {
    try {
      const res = await axios.get('/api/auth');

      dispatch({
        type: 'USER_LOADED',
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: 'AUTH_ERROR',
      });
    }
  };

  const register = async (formData) => {
    try {
      const res = await axios.post('/api/users/register', formData);

      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: 'REGISTER_FAIL',
      });
    }
  };

  const login = async (formData) => {
    try {
      const res = await axios.post('/api/users/login', formData);

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: 'LOGIN_FAIL',
      });
    }
  };

  const logout = () => dispatch({ type: 'LOGOUT' });

  return (
    <AuthContext.Provider value={{
      state,
      dispatch,
      loadUser,
      register,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// PropTypes validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
