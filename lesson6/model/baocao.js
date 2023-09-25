const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const baoCao=new Schema({
    email:String,
    path:String,
    role:String,
    nameFile:String
})

module.exports= mongoose.model("baocaos",baoCao);