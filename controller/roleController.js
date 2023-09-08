const user= require("../data/data");
const RoleController=(req,res)=>{
    const {role} =req.query;
  
    const newRole=Number(role);
   
    const phone=user.filter((product)=>product.info.phone !=="" && product.role===2);
  
   
    if (newRole===2 && phone ) 
    {
        res.json(phone)
    }
  
}

module.exports = RoleController;