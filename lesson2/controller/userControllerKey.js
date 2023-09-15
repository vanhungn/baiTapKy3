const resource=require("../data/dataUser")

const hendelerUSerKey=(req,res)=>{
    const {apiKey}=req.query;
    const hensdlerKey=resource.filter((product)=>product.apiKey===apiKey);
    if(hensdlerKey)
    {
        res.json(hensdlerKey)
    }else{
        res.status(400).json('err')
    }
}

module.exports=hendelerUSerKey;