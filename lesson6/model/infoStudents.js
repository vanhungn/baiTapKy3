const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const infoStudents= new Schema({
    ID:String,
    Name:String,
    Gender:String,
    Class:String,
    Club:String,
    Persona:String,
    Crush:String,
    BreastSize:String,
    Strength:String,
    Hairstyle:String,
    Color:String,
    Stockings:String,
    Accessory:String,
    ScheduleTime:String,
    ScheduleDestination:String,
    ScheduleAction:String,
    email:String,
    password:String,
    role:String
})

module.exports=mongoose.model("infostudents",infoStudents)