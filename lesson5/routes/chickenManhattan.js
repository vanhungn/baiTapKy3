const express=require("express");
const router=express.Router();
const getchickenManhattan=require("../Controller/usersChickenManhattan")

router.get("/",getchickenManhattan)

module.exports=router;