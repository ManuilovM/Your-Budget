const express = require("express"); 

const router  = express.Router();
const BItems = require ('../models/BItems');



router.post('/addItem', (req,res,next)=>{
    req.body.item;
    console.log("addItem "+req.isAuthenticated())
    next()
/*     let userId=;

    BItems.addItem(userId, function (err, data){

    }) */

})

module.exports = router;