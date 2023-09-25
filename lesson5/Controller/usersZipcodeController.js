const usersModel=require("../model/restautansModel");
const getZipcode=async(req,res)=>{
    const {zipcode}=req.query;
   
    try {
        const zipcodeContrller=await usersModel.find({"address.zipcode":zipcode});
        console.log(zipcodeContrller)
        if(zipcodeContrller.length<=0){
              res.status(404).json({data:"not found"})
        }else{
           res.status(200).json({data:zipcodeContrller})
        }
       
    } catch (error) {
       res.status(404).json({
        message:"not data users",
        data:null
       })
    }
}

module.exports=getZipcode;