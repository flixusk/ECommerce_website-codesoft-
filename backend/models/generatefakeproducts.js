// utils/generateRandomProducts.js
const faker = require('faker'); // You can use a library like Faker for generating random data

const generateRandomProduct = () => ({
  name: faker.commerce.productName(),
  price: `$${faker.commerce.price()}`,
  brand: faker.company.companyName(),
  image: faker.image.imageUrl(),
  hoverImage: faker.image.imageUrl(),
  gender: faker.random.arrayElement(['Men', 'Women']),
  category: faker.random.arrayElement(['T-Shirts', 'Jeans', 'Jackets', 'Dresses'])
});

const generateRandomProducts = (count) => Array.from({ length: count }, generateRandomProduct);

module.exports = generateRandomProducts;
