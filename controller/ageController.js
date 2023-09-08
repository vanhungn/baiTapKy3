const user=require('../data/data')
const AgeController=(req,res)=>{
    const {age}=req.query;
    const newAge=Number(age)
   
    const hendlerAge=user.filter((product)=> product.info.age ===newAge&& product.info.age <19 ||product.info.age >29 )
    console.log(hendlerAge)
    if(hendlerAge)
    {
        res.json(hendlerAge)
    }
}

module.exports=AgeController;