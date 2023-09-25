const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listStudents= new Schema({
    name:String,
    Class:String
})

module.exports=mongoose.model("listdbs",listStudents);