const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: process.env.DB_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// referenced (https://stackoverflow.com/questions/41423727/handlebars-registerhelper-serverside-with-expressjs)
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
    extname: '.handlebars',
    helpers: require('./utils/helpers') 
}));
app.set('view engine','handlebars');

//serve static content for the app and set up body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// import routes and give server access to them
app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
});

