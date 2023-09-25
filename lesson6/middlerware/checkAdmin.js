const infoStudentsModel=require("../model/infoStudents")
const checkAdmin=async(req,res,next)=>{
    const {email,password}=req.body;
    try {
        if(!email||!password)
    {
        res.status(404).json({
            message:"is not email or password",
            data:null
        })
    }
        const infoData=await infoStudentsModel.find({email:email,password:password});
        infoData.forEach((product)=>{
        if(product.role !=="admin")
        {
            res.json("account password is incorrect");
            
        }
        else{
            next()
        }
       })
        
    } catch (error) {
        res.status(404).json({
            message:"not found"
        })
    }
   
}

module.exports=checkAdmin