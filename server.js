const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

// const mysql = require('mysql');
// const mysql2 = require('mysql2');
// const homeRoutes = require('./controllers/home-routes');

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

// const helpers = require('./utils/helpers');
// const hbs = exphbs.create({ helpers });

//setting up the handlebars
// app.engine('handlebars', exphbs.engine({
//    defaultLayout: 'main', 
// }));

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

// start the server listening on a port
// app.listen(PORT, ()=>{
//     console.log(`App is listening on PORT ${PORT}`);
// })
