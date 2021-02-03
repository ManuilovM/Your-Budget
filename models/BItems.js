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
    console.log("additem")
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