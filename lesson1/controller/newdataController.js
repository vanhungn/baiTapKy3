const user= require("../data/data")

const NewdataController=(req,res)=>{
    const reqbody=req.body;
    user.push(reqbody);
    res.json(user);

}

module.exports=NewdataController;