const express=require("express");
const router=express.Router();
const getscoreEvaluation=require("../Controller/usersScoreEvaluation")

router.get("/",getscoreEvaluation)

module.exports=router;