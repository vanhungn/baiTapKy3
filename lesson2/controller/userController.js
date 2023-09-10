
const user=require("../data/dataUser");

const hendlerUser=(req,res)=>{
    res.json(user)
}

module.exports=hendlerUser;