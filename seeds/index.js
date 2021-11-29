const seedUsers = require('./user-seed');
const seedFoods = require('./food-seed');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  

  await seedFoods();
  console.log('--------------');


  process.exit(0);
};

seedAll();