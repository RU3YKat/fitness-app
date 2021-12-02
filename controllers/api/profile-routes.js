const router = require('express').Router();
const { Profile } = require('../../models');

// get all Profiles
router.get('/', (req, res) => {
    Profile.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbProfileData => res.json(dbProfileData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Profile.create({
        profilename: req.body.profilename,
        email: req.body.email,
        age: req.body.age,
        height: req.body.height,
        start_weight: req.body.start_weight,
        goal_weight: req.body.goal_weight,
        password: req.body.password
    })
        .then(dbProfileData => {
            req.session.save(() => {
                req.session.profile_id = dbProfileData.id;
                req.session.profilename = dbProfileData.profilename;
                req.session.loggedIn = true;
    
                res.json(dbProfileData);
            })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });
});

router.post('/login', (req, res) => {
    Profile.findOne({
        where: {
            email: req.body.email
    }
    }).then(dbProfileData => {
        if (!dbProfileData) {
            res.status(400).json({ message: 'No profile exists with that email address!' });
            return;
        }

        const validPassword = dbProfileData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            req.session.profile_id = dbProfileData.id;
            req.session.profilename = dbProfileData.profilename;
            req.session.loggedIn = true;

        res.json({ Profile: dbProfileData, message: 'You are now logged in!' });
        });
    });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.put('/:id', (req, res) => {
    Profile.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(dbProfileData => {
            if (!dbProfileData[0]) {
            res.status(404).json({ message: 'No profile found with this id' });
            return;
        }
        res.json(dbProfileData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;