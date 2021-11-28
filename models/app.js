let orm = require("../config/orm.js");

let items = {

    selectAll: (cb)=>{
        orm.selectAll("calorie_tracker",(response)=>{
            cb(response);
        });
    },

    selectCalories: (cb)=>{
        orm.selectCalories("calorie_tracker", (result)=>{
            cb(result);
        });
    },

    deleteAll: (cb)=>{
        orm.deleteAll("calorie_tracker", (result)=>{
            cb(result);
        });
    },

    insertItem: (cols,values,cb)=>{
        orm.insertItem("calorie_tracker", cols, values, (response)=>{
            cb(response);
        });
    },

    deleteItem: (id, cb)=>{
        orm.deleteItem("calorie_tracker", id, (response)=>{
            cb(response);
        });
    },

    updateItem: (id, meal, calorie, cb)=>{
        orm.updateItem("calorie_tracker", id, meal, calorie, (response)=>{
            cb(response);
        }); 
    }
    
};

module.exports = items;