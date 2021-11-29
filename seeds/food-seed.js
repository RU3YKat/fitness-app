const { Food } = require('../models');

const foodData = [
  {
   
    food_name: 'Pizza',
    calories: 30,
  },
  {
    food_name: 'Spaghetti',
    calories: 90
  },
  {
    food_name: 'Salad',
    calories: 12
  },
  
];

const seedFoods = () => Food.bulkCreate(foodData);

module.exports = seedFoods;