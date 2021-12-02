const router = require('express').Router();
const sequelize = require('../../config/connection')

const {Food} = require('../../models');
const { destroy } = require('../../models/Food');

router.post('/', (req,res)=>{
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
    console.log(req.body)
    Food.update({
        food_name: req.body.foodName,
        calories: req.body.calories
    },
    {where:{id:req.params.id}})
    console.log(req.params.id)

      res.send('route is updating')
      })
  
  
 router.delete('/:id',(req,res) => {
    Food.destroy({

        food_name: req.body.foodName,
        calories: req.body.calories
    },
    {where:{id:req.params.id}})
    

    .then(res => {
        if (!res) {
          res.status(404).json({ message: 'No comment found with this id!' });
          return;
        }
        res.json(dbCommentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    res.send('route destroy')
})
      

         

module.exports=router