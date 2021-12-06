const router = require('express').Router();
const { Profile, Food } = require('../../models');

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

// get Profile by id and associated Food
router.get('/:id', (req, res) => {
    Profile.findOne({
        where: {
            id: req.params.id
        },
        attributes: { exclude:
            [
            'email',
            'age',
            'height',
            'start',
            'goal',
            'birthDate',
            'password'
            ] 
        },
        include: [
            {
                model: Food,
                attributes: [
                    'food_name',
                    'calories'
                ]
            }
        ]
    })
    .then(dbProfileData => {
        if (!dbProfileData) {
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

router.post('/', (req, res) => {
    Profile.create({
        profilename: req.body.profilename,
        email: req.body.email,
        age: req.body.age,
        height: req.body.height,
        start: req.body.start,
        goal: req.body.goal,
        password: req.body.password
    })
        .then(dbProfileData => {
            req.session.save(() => {
                req.session.profile_id = dbProfileData.id;
                req.session.profilename = dbProfileData.profilename;
                req.session.loggedIn = true;
    
                res.json(dbProfileData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
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
    console.log(req.session.loggedIn);
    if (req.session.loggedIn) {
        req.session.loggedIn = false;
            console.log('logged in' + req.session.loggedIn);
            res.redirect('/login');
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