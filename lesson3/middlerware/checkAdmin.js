const userModel = require("../model/SignUpModel");

const checkAmin=async(req,res,next)=>{
    const {userName,email}=req.body;
    try {
       const data=await userModel.find({userName:userName,email:email});
        console.log(data)
    if(data.role !=="admin")
    {
        next();
    }
    else{
        res.status(404).json({
            message:"Can not access!!!",
            data:null
        })
    }  
    } catch (error) {
        res.status(404).json({
            message:"not found",
            data:null
        })
    }
   
}

module.exports=checkAmin;