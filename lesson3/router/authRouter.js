const express=require("express");
const router=express.Router();
const authLoginController=require("../controller/authLoginController")

router.post("/",authLoginController);

module.exports=router;