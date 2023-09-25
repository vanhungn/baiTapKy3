const express=require("express");
const router=express.Router();
const adminController=require("../controller/adminController")
const checkAdmin=require("../middlerware/checkAdmin")
const freeMoves=require("../middlerware/freeMovesMidllerware")
router.post("/",freeMoves,checkAdmin,adminController)


module.exports=router;