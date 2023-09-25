const usersModel=require("../model/restautansModel");
const getScoreEvaluation=async(req,res)=>{
    try {
        
        const   scoreEvaluation=await usersModel.find({"grades.score":{$gt:10}});
        console.log(   scoreEvaluation)
        if(   scoreEvaluation.length<=0){
              res.status(404).json({data:"not found"})
        }else{
           res.status(200).json({data: scoreEvaluation})
        }
       
    } catch (error) {
       res.status(404).json({
        message:"not data users",
        data:null
       })
    }
}

module.exports=getScoreEvaluation;