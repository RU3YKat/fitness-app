const router =require('express').Router();

const apiRoutes=require('./api');
const homeRoutes=require('./home-routes');
const foodRoutes= require('./api/food-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/api', homeRoutes);
router.use('/api', foodRoutes);


module.exports = router;

// REQ confirmation of axios setup
// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial',
//   params: {weight: 'weight', height: 'height'},
//   headers: {
//     'x-rapidapi-host': 'body-mass-index-bmi-calculator.p.rapidapi.com',
//     'x-rapidapi-key': 'ca72822864msha4754cc1b6a949dp18b2d1jsnd539212de311'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

// module.exports = axios;
