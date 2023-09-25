const express = require('express');
const router = express.Router();
const getListStudent=require("../controller/admin/getListStudent");
const postListStudents=require("../controller/admin/postListStudent");
const putListStudent=require("../controller/admin/putListStudent");
const deleteListStudents=require("../controller/admin/deleteListStudents")
const getuploads=require("../controller/admin/getUploat");
const deleteUploat=require("../controller/admin/deleteUpload")

router.get("/allupload",getuploads)
router.delete("/dltuploat",deleteUploat)
router.post("/add",postListStudents)
router.put("/put",putListStudent)
router.delete("/delete",deleteListStudents)
router.post("/",getListStudent)
module.exports = router;
