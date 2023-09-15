const mongoose=require("mongoose");

const modelUsers=async()=>{
    const dbUrl="mongodb://0.0.0.0:27017/web";
    try {
        await mongoose.connect(dbUrl)
        console.log("connect successfully");
    } catch (error) {
       console.log(error)
    }
}

module.exports=modelUsers;