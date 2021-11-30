const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Food } = require('../models');


router.get('/', async (req, res) => {
    try {
      // use the sequelize ORM method findAll to get back all the rows in the food table
      // each row becomes an object inside an array, meaning allFoods is an array
      const allFoods = await Food.findAll()
      const newAllFoods = allFoods.map((food) => food.get({ plain: true }))
      console.log(allFoods);
       res.render('index', {items: newAllFoods})

    }
    catch (err) {
      // 500 communicates to client that there is something wrong with the website's servers
      res.status(500).json(err)
    }
  })
//update route//



//add getroute res.render index food.find//
module.exports=router