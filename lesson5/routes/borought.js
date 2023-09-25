const express=require("express");
const router=express.Router();
const getBorough=require("../Controller/usersBorough")

router.get("/",getBorough)

module.exports=router;