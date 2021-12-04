const router = require('express').Router();
const sequelize = require('../config/connection');
const { Profile , Food } = require('../models');

// check for session and redirect to homepage if true 
router.get('/', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('index');
  //   return;
  // } else {
  //   req.sesssion.loggedIn = false;
  // }
  res.render('homepage');
  
});

// path for /login, if loggedIn go to /index 
router.get('/login', (req, res) => {
  // console.log('logged in!' + req.session.loggedIn);
  /*if (req.session.loggedIn) {
    res.redirect('/index');
    return;
  } */

  res.render('login');
});

// router.post('/logout', (req, res) => {
//   console.log('logout selected');
//   if (req.session.loggedIn) {
//     console.log('session loggedIn');
//     res.redirect('/api/profileRoutes');

//   }
// })

router.get('/index', async (req, res) => {
    try {
      // use the sequelize ORM method findAll to get back all the rows in the food table
      // each row becomes an object inside an array, meaning allFoods is an array
      const allFoods = await Food.findAll()
      const newAllFoods = allFoods.map((food) => food.get({ plain: true }))
        console.log(newAllFoods);
        let calorieSum=0;
        newAllFoods.forEach(food=>{
          calorieSum += food.calories;
      })
      console.log(calorieSum);
        res.render('index', {items: newAllFoods, 
          itemSum:calorieSum, loggedIn: req.session.loggedIn
      })

    }
    catch (err) {
      // 500 communicates to client that there is something wrong with the website's servers
      res.status(500).json(err)
    }
  })
//update route//



//add getroute res.render index food.find//

module.exports = router;