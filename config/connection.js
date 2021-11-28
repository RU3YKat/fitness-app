let mysql = require("mysql");
let connection;

//set up connection to use JAWSDB for use on Heroku or fall back to local connection
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "",
        database: "calorie_tracker_db"
    });
}

connection.connect((err)=>{
    if(err){
        console.log(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection; 