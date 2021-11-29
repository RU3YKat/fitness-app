const router = require('express').Router();

const foodRoutes = require('./food-routes');

router.use('/foods', foodRoutes);

module.exports=router