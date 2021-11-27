const router = require('express').Router();
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

module.exports = router;