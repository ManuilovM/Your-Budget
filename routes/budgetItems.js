const express = require("express"); 

const router  = express.Router();
const BItems = require ('../models/BItems');



router.post('/addItem', BItems.addItem);

module.exports = router;