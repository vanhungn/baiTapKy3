
const jwt=require("jsonwebtoken");

const authMiddlerware=(req,res,next)=>{
    try {
        const accessToken=req.headers['x-access-token'];
        if(!accessToken){
            res.status(404).json({
                message:"accessToken undefined",
                data:null
            })
        }
        jwt.verify(accessToken,"Mindx");
        next();
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

module.exports=authMiddlerware;