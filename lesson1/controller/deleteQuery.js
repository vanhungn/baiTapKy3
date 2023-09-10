const user=require("../data/data");

const DeleteQuery=(req,res)=>{
    const {address}=req.query;
    const newdata=JSON.parse(JSON.stringify(user));
   const hendlerDelete=newdata.filter((product)=>product.info.address !==address)
   if(hendlerDelete)
   {
     res.json(hendlerDelete)
   }
}

module.exports=DeleteQuery;