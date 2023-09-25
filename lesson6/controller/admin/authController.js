const jwt=require("jsonwebtoken");
const infoStudentsModel=require("../../model/infoStudents");

const authController=async(req,res)=>{
    const {email,password}=req.body;
    try {
       if(!email,!password)
    {
        res.status(404).json({
            message:"is not email or password",
            data:null
        })
    }
    const authData= await infoStudentsModel.find({email:email,password:password});
    if(!authData){
        res.status(404).json({
            message:"not found"
        })
    }
    const payloat={
        id:authData._id,
    }
    const SECCRESkEY="mindx";
   const tocken= jwt.sign(payloat,SECCRESkEY,{
        expiresIn:500
    })
    res.json(tocken)
    } catch (error) {
        if(error instanceof jwt.JsonWebTokenError)
        {
            res.status(404).json({
                message: 'Token is expired'
            })
        }else{
            res.status(500).json({
                error: error.message,
                stack: error.stack,});
        }
        }
    
    
}

module.exports=authController;