const express = require("express"); 

const router  = express.Router();
const BItems = require ('../models/BItems');



router.post('/addItem', BItems.addItem);

router.post('/deleteItem', BItems.deleteItem);

router.post('/fetchBudgetItems', BItems.fetchBudgetItems);

module.exports = router;