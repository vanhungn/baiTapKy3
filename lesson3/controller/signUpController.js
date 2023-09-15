const signUpModel=require('../model/SignUpModel');
const  postRegister=async(req,res)=>{
    const {userName,email}=req.body;
    try {
        // await signUpModel.create(reqbody);
        const newSign= new signUpModel({
            userName,
            email,
            role:"member"
        })
        await newSign.save();
        
        const result=await signUpModel.find({});
        
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({
            message:"Error sign up",
            data:null
        })
    }
    
   
    
    
    
}

module.exports=postRegister;