const router = require('express').Router();
const sequelize = require('../../config/connection')

const {Food} = require('../../models');
const { destroy } = require('../../models/Food');

router.post('/:id', (req,res)=>{
  console.log('at post:id');
    console.log(req.body)
    Food.create({
        food_name: req.body.foodName,
        calories: req.body.calories
    })

    res.send('route is working')
})

//updateroute
//router.put//
router.put('/:id', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  
    // pass in req.body instead to only update what's passed through
    Food.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No food found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.delete('/:id', (req, res) => {
    Food.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No food found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
    

    
         

module.exports=router