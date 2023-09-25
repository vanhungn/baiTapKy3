const dataUser=require("../model/restautansModel")
const getUserController=async(req,res)=>{
    try {
     const results= await dataUser.find({})
     res.status(200).json(results)
    } catch (error) {
        res.status(404).json({
            message:"Cannot access data users",
            data:null
        })
    }
}

module.exports=getUserController;