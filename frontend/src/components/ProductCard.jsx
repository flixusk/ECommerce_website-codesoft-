import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const ProductCard = ({ id, image, name, price, brand, hoverImage }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, image, name, price, brand } });
  };

  return (
    <div
      className={`bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 ${isHovered ? 'translate-y-[-10px] shadow-lg' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? hoverImage : image}
        alt={name}
        className="w-full h-40 object-cover transition-transform duration-300"
      />
      <div className="p-4 relative">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{brand}</p>
        <p className="text-green-500 font-bold">${price}</p>
        <button
          onClick={handleAddToCart}
          className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-2 shadow-lg hover:bg-green-600 transition-colors duration-300"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
