const user=require("../data/dataUser")

const middlerWareUser=(req,res,next)=>{
    console.log(user);
    next();
}

module.exports=middlerWareUser;