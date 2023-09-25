const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const restauranModel=new Schema({
    address:{
        building:String,
        coord:Array,
        street:String,
        zipcode:String
    },
    borough:String,
    cuisine:String,
    rates:[
        {date:{$date:Number},rate:String,score:Number}
       
    ],
    name:String,
    restaurant_id:String,
})
module.exports= mongoose.model("users",restauranModel);