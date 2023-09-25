const uploatModel=require("../../model/baocao");

const deleteUploat=async(req,res)=>{
    const {_id}=req.query;
    try {
        const findId=await uploatModel.findById({_id:_id});
        if(findId){
            await uploatModel.deleteOne({_id:_id});
            const results= await uploatModel.find({});
            res.status(404).json(results)
        }
        else{
            res.status(404).json({
                message:"ko co bai bao cao",
                data:null
            })
        }
    } catch (error) {
        res.status(404).json({
            message:"error sever"
        })
    }
   
    
}

module.exports=deleteUploat