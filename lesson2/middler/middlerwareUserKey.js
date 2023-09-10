const user=require("../data/dataUser");

const middlerWareUserKey=(req,res,next)=>{
    const {username}=req.query;
    console.log(username)
    const hendlerUserKey=user.filter((product)=>product.username===username)
    if(hendlerUserKey)
    {
        req.userInfo=hendlerUserKey;
        console.log(req.userInfo)
        next();
    }
    else{
       console.log("err")
    }
}

module.exports=middlerWareUserKey;