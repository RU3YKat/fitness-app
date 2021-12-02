const router = require('express').Router();

<<<<<<< HEAD
const profileRoutes = require('./profile-routes');
=======
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

>>>>>>> develop
const foodRoutes = require('./food-routes');

router.use('/profiles', profileRoutes);
router.use('/foods', foodRoutes);
router.post('/foods', foodRoutes);

router.delete('/foods', foodRoutes);

module.exports=router
