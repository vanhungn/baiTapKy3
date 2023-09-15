const express=require("express");
const signUpController=require("../controller/signUpController")
const signUpMidllerware=require("../middlerware/signUpMiddlerware")
const router=express.Router();

router.post("/",signUpMidllerware,signUpController);

module.exports=router