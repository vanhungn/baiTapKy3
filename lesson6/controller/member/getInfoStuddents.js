
const infoStudentsModel=require("../../model/infoStudents");

const getListStudent=async(req,res)=>{
    const {email,password}=req.body;
    try {
        if(!email||!password)
        {
            res.status(404).json({
                message:"is not email or password!!!"
            })
        }
        const infiStudent= await infoStudentsModel.find({email:email,password:password}).select("-password");
        res.json(infiStudent);

    } catch (error) {
        res.status(404).json({
            message:"error sever"
        })
    }
}

module.exports=getListStudent;