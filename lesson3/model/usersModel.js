const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const usersModel=new Schema({
    name:String,
    isFree:Boolean
});

module.exports=mongoose.model("users",usersModel);