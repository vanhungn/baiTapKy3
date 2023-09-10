const express= require("express");
const route= express.Router();
const idApit=require("../controller/paramId");
const apiCon= require('../controller/apiController');
const role=require("../controller/roleController");
const status=require('../controller/statusController');
const age =require("../controller/ageController");
const newdata=require("../controller/newdataController");
const putC=require("../controller/putController");
const putFavorites=require("../controller/favoritesContrller");
const deleteParams=require("../controller/deleteParams");
const deleteQuery=require("../controller/deleteQuery");

route.get('/age',age)
route.get('/status',status)
route.get('/qery',role);
route.get('/:id',idApit);
route.delete('/:id',deleteParams)
route.put('/:id',putC);
route.delete('/',deleteQuery)
route.put('/',putFavorites)
route.post('/',newdata);
route.get('/',apiCon);


module.exports = route;