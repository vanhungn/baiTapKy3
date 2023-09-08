const user= require("../data/data")
const ApiController=(req,res)=>{
        res.json({data:user,});
}

module.exports= ApiController;