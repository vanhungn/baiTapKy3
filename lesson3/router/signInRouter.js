const express=require("express");
const freemovesController=require("../controller/freeMovesController");
const  freeMovesMiddlerware=require("../middlerware/freeMovesMidllerware")
const router=express.Router();

router.post("/",freeMovesMiddlerware,freemovesController);

module.exports=router