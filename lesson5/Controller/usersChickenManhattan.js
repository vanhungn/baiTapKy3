

const { json } = require("express");
const usersModel=require("../model/restautansModel");
const getChickenManhattan=async(req,res)=>{
    const {borough,name}=req.query;
    const newName=JSON.stringify(name);
    const newName2=JSON.parse(newName);
    try {
        const Borough=await usersModel.find({borough:borough,name:newName2});
        
        if(Borough.length<=0){
              res.status(404).json({data:"not found"})
        }else{
           res.status(200).json({data:Borough})
        }
       
    } catch (error) {
       res.status(404).json({
        message:"not data users",
        data:null
       })
    }
}

module.exports=getChickenManhattan;