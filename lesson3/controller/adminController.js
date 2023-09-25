const usersmodell=require("../model/usersModel");
const getAllmoves=async(req,res)=>{
    try {

    const moves=await usersmodell.find({});
    res.status(200).json(moves);
    } catch (error) {
        res.status(404).json({
            message:"not found",
            data:null
        })
    }
    
}

module.exports=getAllmoves;