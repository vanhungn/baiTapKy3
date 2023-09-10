const express=require("express");
const router=express.Router();
const userRouter=require("./routerUser");

router.use("/user",userRouter);
module.exports=router;