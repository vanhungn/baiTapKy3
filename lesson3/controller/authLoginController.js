const dataLogin=require("../model/SignUpModel")
const jwt=require("jsonwebtoken");
const authLoginController=async(req,res)=>{
    const {userName,email}=req.body;
   
    try {
        if(!userName||!email){
            res.status(400).json({
                message: 'Missing required keys',
              });
        }
     const existingUser=   await dataLogin.find({userName:userName,email:email});

     if(!existingUser){
        res.json({
            message: 'Email or password does not correct',
          });
     }

     const payload={
        id:existingUser.id,
        userName:existingUser.userName,
        email:existingUser.email,
        role:existingUser.role
     }
     const SECRET_KEY="Mindx";
     const tocken= jwt.sign(payload,SECRET_KEY,{
        expiresIn:180
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

module.exports=authLoginController;