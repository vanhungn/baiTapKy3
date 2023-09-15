const express=require("express");
const router=express.Router();

const middlerWareUser=require("../middler/middlerwareUser");
const controllerUser=require("../controller/userController");
const middlerwareUserKey=require("../middler/middlerwareUserKey")
const controllerUserKey=require("../controller/userControllerKey");
const systemController=require("../controller/systemController");

router.put("/system/statistic",middlerwareUserKey,systemController)
router.get("/api",middlerwareUserKey,controllerUserKey);
router.get("/",middlerWareUser,controllerUser);

module.exports=router;