const path = require('path');
const express = require('express');
// let body_parser = require('body-parser');
let exphbs = require('express-handlebars');
// const mysql = require('mysql');
// const mysql2 = require('mysql2');
// const homeRoutes = require('./controllers/home-routes');

let app = express();
let port = process.env.PORT || 3000;

// const sequelize = require('./config/connection');

// const hbs = exphbs.create({});

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));

//serve static content for the app and set up body-parser
// app.use(express.static("public"));
// app.use(body_parser.urlencoded({
//     extended: false
// }));
// app.use(body_parser.json());

//setting up the handlebars
app.engine("handlebars",exphbs.engine({
    defaultLayout: "main"
}));
app.set("view engine","handlebars");

// import routes and give server access to them
app.use(require('./controllers'))

// start the server listening on a port
app.listen(port, ()=>{
    console.log(`App is listening on PORT ${port}`);
})

// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log('Now listening'));
// });
