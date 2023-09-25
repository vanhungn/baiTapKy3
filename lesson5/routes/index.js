var express = require('express');
var router = express.Router();
const dataUsersController=require("../Controller/usersAllController")
/* GET home page. */
router.get('/', dataUsersController);

module.exports = router;
