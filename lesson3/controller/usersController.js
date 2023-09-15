const usersModel=require("../model/usersModel")
const getUsers=async(req,res)=>{
    try {
     const results=  await usersModel.find({isFree:true});
     res.status(200).json(results)
    } catch (error) {
        console.log(error)
    }
   
  
    
}

module.exports=getUsers;