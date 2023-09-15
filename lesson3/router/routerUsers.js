const express=require("express");
const router=express.Router();
const userController=require("../controller/usersController")

router.get("/",userController)

module.exports=router;