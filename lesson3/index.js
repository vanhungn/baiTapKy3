const express=require("express");
const app=express();
const usersRoute=require("./router/routerUsers");
const signUpRouter=require("./router/signUpRouter");
const SignInRouter=require("./router/signInRouter");
const auth=require("./router/authRouter")
const db = require("./confid/db")
const PORT=3000;

db();

app.use(express.json());

app.use("/auth",auth)
app.use("/signIn",SignInRouter)
app.use("/register",signUpRouter)
app.use("/",usersRoute);

app.listen(PORT,()=>{
    console.log(`sever running at localhot:${PORT}`)
})