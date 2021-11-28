let express = require("express");
let router = express.Router();
let items = require("../models/app.js");

router.get("/", (req,res)=>{
    items.selectAll((data)=>{
        let itemsObject = {
            items : data
        };
        res.render("index",itemsObject); 
    });
});

router.delete("/api/fooditems", (req,res)=>{
    items.deleteAll((result)=>{
        if(result.changedRows == 0){
            return res.status(404).end();
        }
        else{
            res.status(200).end();
        }
    });
});

router.post("/api/fooditems",(req,res)=>{
    items.insertItem(["item_name, calorie"],[req.body.itemName, req.body.itemCalorie], (response)=>{
        res.json(response.insertId);
    });
});

router.get("/api/calories", (req,res)=>{
    items.selectCalories((data)=>{
        res.json(data);
    });        
});

router.delete("/api/fooditems/:id", (req,res)=>{
    let id = req.params.id;
    items.deleteItem(id, (result)=>{
        if(result.changedRows == 0){
            return res.status(404).end();
        }
        else{
            res.status(200).end();
        }
    });
});

router.put("/api/fooditems/:id", (req,res)=>{
    let id = req.params.id;
    let meal = req.body.meal;
    let calorie = req.body.calorie;
    items.updateItem(id, meal, calorie, (result)=>{
        if(result.changedRows == 0){
            return res.status(404).end();
        }
        else{
            res.status(200).end();
        }
    });
});


module.exports = router;