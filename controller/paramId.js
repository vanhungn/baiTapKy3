const user= require("../data/data")
const ParamsId=(req,res)=>{
    const {id} = req.params;
    const newId=Number(id);
    const filterId=user.filter((product)=>product.id===newId);
    if(filterId)
    {
         res.json({data:filterId,});
    }
    else{
        console.log("error")
    }
       
}

module.exports= ParamsId;