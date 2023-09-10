const express=require("express");
const routerUser=require("./router/index")
const app=express();

const PORT=3000;
app.use(express.json());
app.use("/",routerUser);

app.listen(PORT,()=>{
    console.log(`sever is running at ${PORT} `)
})