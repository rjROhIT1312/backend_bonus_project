const express=require("express")
const app=express()

const cron = require("node-cron");
const router = express. Router();
const route=require("./work")
 app.use("/",route)

 app.listen(process.env.PORT || 3000, function(){
    console.log("All good working at "+(process.env.PORT||3000))
 })