const router = require('express').Router();
const sequelize = require('../../config/connection')

const { Food, Profile } = require('../../models');
// const { destroy } = require('../../models/Food');

// get all foods associated with a profile
router.get('/', (req, res) => {
  Food.findAll({
    attributes: ['id','food_name', 'calories'],
    include: [
      {
        model: Profile,
        attributes: ['id', 'profilename']
      }
    ]
  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/:id', (req,res)=>{
    Food.create({
        food_name: req.body.foodName,
        calories: req.body.calories,
        profile_id: req.session.profile_id
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
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

module.exports = router;