const mongoose=require("mongoose");

const connectData=async()=>{
    const url="mongodb://0.0.0.0:27017/infoStudentMindx"
    try {
        await mongoose.connect(url);
        console.log("connect succesfully");
    } catch (error) {
        console.log("Can not connect");
    }
}

module.exports=connectData;