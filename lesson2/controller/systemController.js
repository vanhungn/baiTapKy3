const user=require("../data/dataResource");

const hensdlerSystem=(req,res)=>{
    const {username}=req.query;
    // const newdata=JSON.parse(JSON.stringify(user));
    user.forEach((product)=>{
        if(product.user==username){
           product.student += 1;
           
            res.json(product)
        }
    })
}

module.exports=hensdlerSystem;