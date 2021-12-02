const router = require('express').Router();
const sequelize = require('../config/connection');
const { Profile , Food } = require('../models');


router.get('/', async (req, res) => {
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
        itemSum:calorieSum

      })

    }
    catch (err) {
      // 500 communicates to client that there is something wrong with the website's servers
      res.status(500).json(err)
    }
  })
//update route//



//add getroute res.render index food.find//

// check for session and redirect to homepage if true 
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});


module.exports=router