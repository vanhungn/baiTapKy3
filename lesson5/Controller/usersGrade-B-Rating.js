const usersModel=require("../model/restautansModel");
const getGradeBRating=async(req,res)=>{
    const {grade}=req.query;
    try {
        const gradeBRating=await usersModel.find({"grades.grade":grade});
        console.log( gradeBRating)
        if( gradeBRating.length<=0){
              res.status(404).json({data:"not found"})
        }else{
           res.status(200).json({data: gradeBRating})
        }
       
    } catch (error) {
       res.status(404).json({
        message:"not data users",
        data:null
       })
    }
}

module.exports=getGradeBRating;