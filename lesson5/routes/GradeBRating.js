const express=require("express");
const router=express.Router();
const getGradeBRating=require("../Controller/usersGrade-B-Rating")

router.get("/",getGradeBRating)

module.exports=router;