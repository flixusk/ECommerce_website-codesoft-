// routes/products.js
const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');

// Helper function to generate random products
const generateRandomProduct = () => ({
  name: faker.commerce.productName(),
  price: `$${faker.commerce.price()}`,
  brand: faker.helpers.arrayElement(['Brand A', 'Brand B', 'Brand C', 'Brand D']),
  image: faker.image.url(),
  hoverImage: faker.image.url(),
  gender: faker.helpers.arrayElement(['Men', 'Women']),
  category: faker.helpers.arrayElement(['T-Shirts', 'Jeans', 'Jackets', 'Dresses'])
});

const generateRandomProducts = (count) => Array.from({ length: count }, generateRandomProduct);

// Route to get random products
router.get('/random', (req, res) => {
  const count = parseInt(req.query.count) || 10; // Default to 10 products
  const products = generateRandomProducts(count);
  res.json(products);
});

module.exports = router;
