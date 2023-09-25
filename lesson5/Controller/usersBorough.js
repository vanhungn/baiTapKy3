const usersModel=require("../model/restautansModel");
const getBorough=async(req,res)=>{
    const {borough}=req.query;
    try {
        const Borough=await usersModel.find({borough:borough});
        
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

module.exports=getBorough;