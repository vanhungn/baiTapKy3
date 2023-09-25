var express = require('express');
var router = express.Router();
const zipcodeController=require("../Controller/usersZipcodeController")

/* GET users listing. */
router.get("/",zipcodeController)

module.exports = router;
