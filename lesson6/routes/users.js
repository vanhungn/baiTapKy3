const express=require("express");
const router=express.Router();
const getInfoStudent=require("../controller/member/getInfoStuddents");
const uploads=require("../controller/member/uploadFile")
const seeFileUpload=require("../upload/uploatss");
const detail=require("../controller/member/detailBaocao")



router.post("/detail/baocao",detail)
router.post("/uploads/see",uploads.single("avatar"),seeFileUpload);

router.post("/",getInfoStudent);
module.exports = router;
