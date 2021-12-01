const seedUsers = require('./user-seeds');
// const seedUsers = require('./user-seed');
const seedFoods = require('./food-seed');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();

  console.log('--------------');
  

  await seedFoods();
  console.log('--------------');


  process.exit(0);
};

seedAll();