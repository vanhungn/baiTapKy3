const usersModel=require("../model/restautansModel");
const getWallStreet=async(req,res)=>{
    const {street}=req.query;
    const newStreet=JSON.stringify(street);
    const newStreet2=JSON.parse(newStreet);
    try {
        const wallStreet=await usersModel.find({"address.street":newStreet2});
        console.log(wallStreet)
        if(wallStreet.length<=0){
              res.status(404).json({data:"not found"})
        }else{
           res.status(200).json({data:wallStreet})
        }
       
    } catch (error) {
       res.status(404).json({
        message:"not data users",
        data:null
       })
    }
}

module.exports=getWallStreet;