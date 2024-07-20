import React from 'react';
import { FaPlus } from 'react-icons/fa'; // Import the "+" icon
import { useCart } from '../context/CartContext'; // Import the CartContext

const products = [
  { id: 1, title: 'Classic White T-Shirt', content: 'A timeless white tee made from soft, breathable cotton.', price: '$24.99', image: 'https://via.placeholder.com/300x200' },
  { id: 2, title: 'Denim Blue Jeans', content: 'Stylish blue jeans with a comfortable fit and durable fabric.', price: '$49.99', image: 'https://via.placeholder.com/300x200' },
  { id: 3, title: 'Black Leather Jacket', content: 'A sleek black leather jacket that adds a touch of edge to any outfit.', price: '$129.00', image: 'https://via.placeholder.com/300x200' },
  { id: 4, title: 'Floral Summer Dress', content: 'A vibrant floral dress perfect for summer outings and events.', price: '$39.95', image: 'https://via.placeholder.com/300x200' },
  { id: 5, title: 'Casual Sweatshirt', content: 'A cozy sweatshirt for relaxed days, made from premium fleece.', price: '$34.50', image: 'https://via.placeholder.com/300x200' },
  { id: 6, title: 'Striped Polo Shirt', content: 'A classic polo with stripes, ideal for a casual yet polished look.', price: '$29.99', image: 'https://via.placeholder.com/300x200' },
  { id: 7, title: 'Warm Wool Scarf', content: 'A soft wool scarf to keep you warm during chilly weather.', price: '$22.00', image: 'https://via.placeholder.com/300x200' },
  { id: 8, title: 'Comfortable Jogger Pants', content: 'Relaxed jogger pants with a tapered fit, perfect for lounging or workouts.', price: '$39.00', image: 'https://via.placeholder.com/300x200' },
];

const Product = () => {
  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className='overflow-x-auto w-full py-4'>
      <div className='flex gap-4 min-w-max'>
        {products.map((product) => (
          <div key={product.id} className='relative flex-none w-60 bg-white shadow-md rounded-lg p-4'>
            <img src={product.image} alt={product.title} className='w-full h-32 object-cover rounded-lg mb-4'/>
            <h3 className='text-lg font-semibold mb-2'>{product.title}</h3>
            <p>{product.content}</p>
            <p className='text-green-500 font-bold mb-2'>{product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="absolute bottom-2 right-2 bg-green-500 text-white rounded-full p-1 shadow-lg hover:bg-green-600 transition-colors duration-300"
            >
              <FaPlus className="text-xs" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
