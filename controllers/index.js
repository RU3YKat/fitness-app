var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial',
  params: {weight: 'weight', height: 'height'},
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