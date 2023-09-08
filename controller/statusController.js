const user=require('../data/data')
const StatusController=(req,res)=>{
    const {status}=req.query;
    const hendlerStatus=user.filter((product)=>product.status===status)
    if(hendlerStatus){
        res.json(hendlerStatus)
    }
    else{
        console.log("err")
    }

}

module.exports= StatusController;