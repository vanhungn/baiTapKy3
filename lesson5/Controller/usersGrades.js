const usersModel=require("../model/restautansModel");
const getGrades=async(req,res)=>{
    try {
        const grades=await usersModel.find({$where:'this.grades.length>3'});
        console.log( grades)
        if( grades.length<=0){
              res.status(404).json({data:"not found"})
        }else{
           res.status(200).json({data: grades})
        }
       
    } catch (error) {
       res.status(404).json({
        message:"not data users",
        data:null
       })
    }
}

module.exports=getGrades;