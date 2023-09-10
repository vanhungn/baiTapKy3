const resource=require("../data/dataResource")

const hendelerUSerKey=(req,res)=>{
    const {username}=req.query;
    const hensdlerKey=resource.filter((product)=>product.user===username)
    if(hensdlerKey)
    {
        res.json(hensdlerKey)
    }
}

module.exports=hendelerUSerKey;