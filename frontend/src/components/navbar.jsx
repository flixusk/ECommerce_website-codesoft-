import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Logo from "../assets/logo_1.png";
import CartIcon from "../assets/cart.png";

const Navbar = () => {
  const { state } = useCart();

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    sessionStorage.removeItem('cart'); // Clear cart on logout
    window.location.replace("/");
  };

  return (
    <header className="bg-white shadow-md">
      <div className='max-w-screen-xl mx-auto px-4'>
        <div className='flex items-center justify-between py-4'>
          <img src={Logo} alt='LOGO' className='h-12' />

          <nav>
            <ul className="flex items-center space-x-4 ml-auto text-lg">
              <li><a href='/'>Home</a></li>
              <li className="relative group">
                <a href='#' className="group-hover:text-gray-900 flex items-center">
                  Shop By
                  <svg className="w-4 h-4 ml-1 text-gray-600 group-hover:text-gray-900 transition-colors duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <ul className="bg-orange-200 absolute hidden group-hover:block right-0 mt-2 py-2 border rounded-lg shadow-lg">
                  <li><a href='#' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Category 1</a></li>
                  <li><a href='#' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Category 2</a></li>
                  <li><a href='#' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Category 3</a></li>
                </ul>
              </li>
              <li><a href='/product'>Product</a></li>
              <li><a href='#'>About</a></li>
              <li className="relative">
                <Link to="/cart">
                  <img src={CartIcon} alt='Cart' className='w-12' />
                  {state.cart.length > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                      {state.cart.length}
                    </span>
                  )}
                </Link>
              </li>
              <li>
                {localStorage.getItem('auth-token')
                  ? <button onClick={handleLogout} className="bg-black text-white border-2 border-orange-500 py-2 px-4 rounded hover:bg-green-500 hover:text-white transition-colors duration-300">Logout</button>
                  : <Link to="/login" className="bg-transparent border-2 border-green-500 text-green-500 py-2 px-4 rounded hover:bg-green-500 hover:text-white transition-colors duration-300">
                    Login
                  </Link>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
