<<<<<<< HEAD
const seedProfiles = require('./profile-seeds');
// const seedUsers = require('./user-seed');
const seedFoods = require('./food-seed');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedProfiles();

=======
const seedUsers = require('./user-seeds');
// const seedUsers = require('./user-seed');
const seedFoods = require('./food-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
>>>>>>> develop
  console.log('--------------');
  

  await seedFoods();
  console.log('--------------');


  process.exit(0);
};

seedAll();