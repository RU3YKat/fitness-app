const router = require('express').Router();

// const userRoutes = require('./user-routes');
const profileRoutes = require('./profile-routes');
const foodRoutes = require('./food-routes');
// const bmiRoutes = require('./bmi-routes');

// router.use('/users', bmiRoutes);
router.use('/profiles', profileRoutes);
router.use('/foods', foodRoutes);



// router.use('/bmicalculator', bmiRoutes);
// router.post('/foods', foodRoutes);
// router.delete('/foods', foodRoutes);

module.exports = router;

// BEFORE MERGE index.js
// const router = require('express').Router();

// const userRoutes = require('./user-routes');

// router.use('/users', userRoutes);

// const foodRoutes = require('./food-routes');

// router.use('/foods', foodRoutes);

// router.post('/foods', foodRoutes);

// router.delete('/foods', foodRoutes);

// module.exports=router