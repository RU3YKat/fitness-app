let connection = require("../config/connection.js");

let constructQuestionMarks = function(valuesLength){
    let questionMarks = [];
    for (let index = 0; index < valuesLength; index++) {
        questionMarks.push("?");
    }
    return questionMarks.toString();
}

let orm = {
    
    selectAll: (table,cb)=>{
        let queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, (error,result)=>{
            if(error){
                throw err;
            }
            cb(result);
        });
    },

    selectCalories: (table,cb)=>{
        let queryString = `SELECT SUM(calorie) as sum FROM ${table};`;
        connection.query(queryString, (error,result) => {
            if(error){
                throw err;
            }
            cb(result);
        });
    },

    deleteAll: (table, cb)=>{
        let queryString = `DELETE FROM ${table}`;
        connection.query(queryString, (error,result)=>{
            if(error){
                throw error;
            }
            cb(result);
        });
    },

    insertItem: (table, cols, values, cb)=>{
        let queryString =  `INSERT INTO ${table} (${cols.toString()}) VALUES (${constructQuestionMarks(values.length)})`;
        connection.query(queryString,values, (err,result)=>{
            if(err){
                throw err;
            }
            else{
                cb(result);
            }
        });
    },

    deleteItem: (table, id, cb)=>{
        let queryString = `DELETE FROM ${table} WHERE id = ${id}`;
        connection.query(queryString, (error, result)=>{
            if(error){
                throw error;
            }
            else{
                cb(result);
            }
        });
    },

    updateItem: (table, id, meal, calorie, cb)=>{
        let queryString = `UPDATE ${table} SET item_name = '${meal}', calorie = ${calorie} WHERE id = ${id}`;
        connection.query(queryString, (error, result)=>{
            if(error){
                throw error;
            }
            cb(result);
        });
    }
};

module.exports = orm;