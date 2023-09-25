const mongoose=require("mongoose");

const  configDb=async()=>{
    const dbUrl="mongodb://0.0.0.0:27017/web_restaurans";
    try {
        await mongoose.connect(dbUrl)
        console.log("connect successfully");
    } catch (error) {
       console.log(error)
    }
}

module.exports=configDb;