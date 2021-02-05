const mongoose = require('mongoose');



const  BitemsSchema = mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    itemID: {
        type: String,
        required: true,
        index: true,
        unique: true  
    },
}) 
  

module.exports.addItem =function(req, res){
    console.log("additem:" + req.body.bitem.date);
    console.log("additem: "+res.locals.id);
    const BI = mongoose.model(res.locals.id, BitemsSchema);
    BI.create(req.body.bitem, function(err, doc){
        if(err) {
            console.log(err);
            res.json({success:false, msg: err.message})
        } else{
            res.json({success:true, msg: "Запись сохранена в БД"})
        }
    });
}

module.exports.deleteItem = function(req, res){
    const BI = mongoose.model(res.locals.id, BitemsSchema);
    BI.deleteOne({itemID: req.body.itemId}, function(err, result){
        if(err) {
            console.log(err);
            res.json({success:false, msg: err.message})
        } else{
            console.log("Запись удалена из БД")
            res.json({success:true, msg: "Запись удалена из БД"})
        }
    })
}
module.exports.fetchBudgetItems = function(req, res){
    const BI = mongoose.model(res.locals.id, BitemsSchema);

    BI.find({}, function(err, docs){
        if(err){
            console.log(err);
            res.json({success:false, msg: err.message});
        }else{
            if (docs){
                console.log("Записи взяты");
                res.json({success: true, msg : "Записи взяты", budgetItems: docs})
            }
        }
    })
}