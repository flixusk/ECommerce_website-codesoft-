import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    gender: '',
    brand: '',
    price: [0, 1000],
  });
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => {
      const newFilters = { ...prev, [name]: value };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handleMinPriceChange = (e) => {
    const value = Number(e.target.value);
    setMinPrice(value);
    setFilters(prev => {
      const newFilters = { ...prev, price: [value, filters.price[1]] };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handleMaxPriceChange = (e) => {
    const value = Number(e.target.value);
    setMaxPrice(value);
    setFilters(prev => {
      const newFilters = { ...prev, price: [filters.price[0], value] };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-md">
      <h2 className="text-lg font-bold mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block mb-2">Category</label>
        <select name="category" onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">All</option>
          <option value="T-Shirts">T-Shirts</option>
          <option value="Jeans">Jeans</option>
          <option value="Jackets">Jackets</option>
          <option value="Dresses">Dresses</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Gender</label>
        <select name="gender" onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">All</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Brand</label>
        <select name="brand" onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">All</option>
          <option value="Brand A">Brand A</option>
          <option value="Brand B">Brand B</option>
          <option value="Brand C">Brand C</option>
          <option value="Brand D">Brand D</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Price Range</label>
        <div className="flex items-center">
          <input
            type="range"
            min="0"
            max="1000"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="w-full"
          />
          <input
            type="range"
            min={minPrice}
            max="1000"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-sm">
          <span>${filters.price[0]}</span>
          <span>${filters.price[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
