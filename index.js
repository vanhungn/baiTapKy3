const express= require("express");
const app=express();
const PORT=3001;
const route= require('./route/indexRoute')


//route init
app.use(express.json());
route(app);
app.listen(PORT,()=>{
    console.log(`sever is running at ${PORT}`)
})