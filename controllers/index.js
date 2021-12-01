const router =require('express').Router();

const apiRoutes=require('./api');

const homeRoutes=require('./home-routes');

const foodRoutes= require('./api/food-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/api', homeRoutes);
router.use('/api', foodRoutes);


module.exports=router