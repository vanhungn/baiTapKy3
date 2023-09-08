const user= require('../data/data');

const FavoritesController=(req,res)=>{
    const {id}=req.query;
    const newID=Number(id);
    const reqbody=req.body;

    const newdata=JSON.parse(JSON.stringify(user));
    newdata.forEach((product)=>{
        if(product.id===newID)
        {
            product.info.favorites=reqbody;
        }
    });
    res.json({data:newdata})
}

module.exports=FavoritesController;