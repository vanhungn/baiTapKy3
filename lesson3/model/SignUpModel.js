const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const SignUpModel=new Schema({
    userName:String,
    email:String,
    role:String
});

module.exports= mongoose.model("usersmodels",SignUpModel);