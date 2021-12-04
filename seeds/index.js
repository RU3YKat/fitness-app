const seedProfiles = require('./profile-seeds');
const seedFoods = require('./food-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedProfiles();
  console.log('--------------');
  

  await seedFoods();
  console.log('--------------');


  process.exit(0);
};

seedAll();