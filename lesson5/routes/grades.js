const express=require("express");
const router=express.Router();
const getGrades=require("../Controller/usersGrades")

router.get("/",getGrades)

module.exports=router;