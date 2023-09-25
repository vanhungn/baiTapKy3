const uploadMod=require("../../model/baocao");

const detail=async(req,res)=>{
    const {email}=req.body;
    try {
        const baocao=await uploadMod.find({email:email});
        if(baocao.length>0){
            res.json(baocao)
        }
        else{
            res.status(404).json({
                message:"not found"
            })
        }
    } catch (error) {
        res.status(404).json({
            message:"error detail"
        })
    }
}

module.exports=detail;