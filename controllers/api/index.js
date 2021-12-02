const router = require('express').Router();

const profileRoutes = require('./profile-routes');
const foodRoutes = require('./food-routes');

router.use('/profiles', profileRoutes);
router.use('/foods', foodRoutes);
router.post('/foods', foodRoutes);

module.exports=router
