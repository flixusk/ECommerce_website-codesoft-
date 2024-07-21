import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/navbar';
import FilterProduct from '../components/FilterProduct';
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://ecommerce-website-codesoft.onrender.com/api/products/random?count=20');
        // Debug response
        console.log('Fetched products:', response.data);

        // Check if response data is an array
        if (Array.isArray(response.data)) {
          setProducts(response.data);
          setFilteredProducts(response.data); // Initialize filteredProducts
        } else {
          console.error('API response is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (filters) => {
    console.log('Filters applied:', filters); // Log filters for debugging
    const { brand, price, gender, category } = filters;

    // Apply filters to products
    const filtered = products.filter(product => {
      const productPrice = parseFloat(product.price.replace('$', ''));
      return (
        (brand === '' || product.brand === brand) &&
        (gender === '' || product.gender === gender) &&
        (category === '' || product.category === category) &&
        (productPrice >= price[0] && productPrice <= price[1])
      );
    });

    // Update state with filtered products
    setFilteredProducts(filtered);
  };

  if (loading) {
    return <div className="p-4 text-center">Loading products...</div>; // Loading state UI
  }

  return (
    <div>
      <Navbar />
      <div className="flex">
        <FilterProduct onFilterChange={handleFilterChange} />
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-6 text-center">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id} // Use unique identifier if available
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  brand={product.brand}
                  hoverImage={product.hoverImage}
                />
              ))
            ) : (
              <p>No products available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
