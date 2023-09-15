const user=require("../data/dataUser");

const middlerWareUserKey=(req,res,next)=>{
    const {apiKey}=req.query;
    const hendlerUserKey=user.filter((product)=>product.apiKey===apiKey)
    if(hendlerUserKey.length===0)
    {
        // req.userInfo=hendlerUserKey;
        // console.log(req.userInfo)
        // next();
         res.status(400).json('errs');
    }
    else{  
        
        req.userInfo=hendlerUserKey;
        console.log(req.userInfo)
        next();

      
    }
    
}

module.exports=middlerWareUserKey;