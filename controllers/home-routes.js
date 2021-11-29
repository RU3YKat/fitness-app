const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Food } = require('../models');

router.get('/',(req,res)=>{
    res.render('index')
})

//add getroute res.render index food.find//
module.exports=router