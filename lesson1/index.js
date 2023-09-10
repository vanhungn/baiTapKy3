const express= require("express");
const app=express();
const PORT=3001;
const route=require("./route/indexRoute")


//route init
app.use(express.json());
app.use("/",route)
app.listen(PORT,()=>{
    console.log(`sever is running at ${PORT}`)
})