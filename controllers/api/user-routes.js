const router = require('axios').Router();
const { User } = require('../../models');

// get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    });
});

// get user by height
router.get('/:height', (req, res) => {
    User.findAll({
        attributes: {exclude: ['password'] },
        where: {
            height: req.params.height
            // [height.overlap]: [60, 70]
        }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
// get user by weight
router.get('/:weight', (req, res) => {
    User.findAll({
        attributes: {exclude: ['password'] },
        where: {
            weight: req.params.weight
            // [weight.overlap]: [60, 70]
        }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
// get user by age
router.get('/:age', (req, res) => {
    User.findAll({
        attributes: {exclude: ['password'] },
        where: {
            age: req.params.age
            // [age.overlap]: [60, 70]
        }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.post('/',(req,res)=>{
    User.create(req.body).then(dbUserData => res.json({message:"success"}))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
 
});
module.exports = router;