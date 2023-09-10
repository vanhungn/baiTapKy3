const user=require("../data/data")

const DeleteParams=(req,res)=>{
    const {id}=req.params;
    const newdata=JSON.parse(JSON.stringify(user));
    const newId=Number(id);
   const hendlerDelete=newdata.filter((product)=>product.id !==newId)
   if(hendlerDelete)
   {
     res.json(hendlerDelete)
   }
  
}

module.exports=DeleteParams;