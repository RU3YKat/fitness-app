var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial',
  params: {weight: 150, height: 64},
  headers: {
    'x-rapidapi-host': 'body-mass-index-bmi-calculator.p.rapidapi.com',
    'x-rapidapi-key': 'ca72822864msha4754cc1b6a949dp18b2d1jsnd539212de311'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

module.exports = axios;

const router =require('express').Router();

const apiRoutes=require('./api');

const homeRoutes=require('./home-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports=router;
