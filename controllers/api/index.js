const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

const foodRoutes = require('./food-routes');

router.use('/foods', foodRoutes);

router.post('/foods', foodRoutes);

router.delete('/foods', foodRoutes);

module.exports=router
