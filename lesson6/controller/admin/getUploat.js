const upLoadModel=require("../../model/baocao");

const getUpload=async(req,res)=>{
    try {
        const get=await upLoadModel.find({});
        res.json(get)
    } catch (error) {
        res.status.json({message:"error get upload"})
    }
}

module.exports=getUpload;