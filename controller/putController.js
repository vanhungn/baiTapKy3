const user=require("../data/data");
const PutController=(req,res)=>{
    const {id}=req.params;
    const newID=Number(id);
    const newData=JSON.parse(JSON.stringify(user));
   
    newData.forEach((value)=>{
        if(value.id===newID)
        {
            value.info.phone ="0999999999";
        }
    });
    res.json(newData);
}

module.exports=PutController;