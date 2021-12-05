const Profile = require('./Profile');
const Food = require('./Food');

Profile.hasMany(Food, {
    foreignKey: 'profile_id'
});

Food.belongsTo(Profile, {
    foreignKey: 'profile_id'
});

module.exports = { Food, Profile };
