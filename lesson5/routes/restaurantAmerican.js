const express=require("express");
const router=express.Router();
const getRestauransAmerican=require("../Controller/usersAmerican")

router.get("/",getRestauransAmerican)

module.exports=router;