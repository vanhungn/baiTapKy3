const express=require("express");
const route= express.Router();
const apiRoute = require('./ipa');

    
route.use("/",apiRoute)
   
  


module.exports = route;