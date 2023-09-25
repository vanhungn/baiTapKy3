const usersModel=require("../model/restautansModel");
const getRestauransAmerican=async(req,res)=>{
    const {cuisine}=req.query;
    
    try {
        const RestauransAmericanContrller=await usersModel.find({cuisine:cuisine});
        
        if(RestauransAmericanContrller.length<=0){
              res.status(404).json({data:"not found"})
        }else{
           res.status(200).json({data:RestauransAmericanContrller})
        }
       
    } catch (error) {
       res.status(404).json({
        message:"not data users",
        data:null
       })
    }
}

module.exports=getRestauransAmerican;