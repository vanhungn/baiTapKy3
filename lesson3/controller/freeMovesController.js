const dataSign=require("../model/SignUpModel")
const dataUsers=require("../model/usersModel")
const hendlerFreeMoves=async(req,res)=>{
    const {userName,email}=req.body;
    try {
     const resuls=   await dataSign.find({userName:userName,email:email});
     const movesFree= await dataUsers.find({isFree:false})
     if(resuls){
         res.status(200).json(movesFree)
     }else{
        res.status(404).json({
            message:"undefinded data",
            data:null
        })
     }
    
    } catch (error) {
        res.status(404).json({
            message:"account is not registered",
            data:null
        })
    }
}

module.exports=hendlerFreeMoves;