const express=require("express");
const router=express.Router();
const getWallStreet=require("../Controller/usersWallStreet")

router.get("/",getWallStreet)

module.exports=router;