const dataUsers=require("../model/SignUpModel")
const hendlerSignUp=async(req,res,next)=>{
    const {userName,email}=req.body;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    try {
          const hendlerData=await dataUsers.find({userName:userName});
          console.log(hendlerData)
           if(!userName||!email||!userName&&!email||!regexEmail||hendlerData.length>0)
    {
        res.status(404).json({
            message:"You must fill in all information",
            data:null
        })
    }
    else{
        next();
    }
    } catch (error) {
        res.status(404).json({
            message:"Error!!",
            data:null
        })
    }
  
 
   
}
module.exports=hendlerSignUp;