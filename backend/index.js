const express=require("express")
const app=express();
app.use(express.json());
const database=require("./config/database")
const dotenv = require("dotenv");
dotenv.config();

database.dbConnect();
const user=require("./routes/user");
app.use("/api/v1",user);
app.listen(8000,()=>{
    console.log("App Started At 3000 Port")
})

app.get("/",(req,res)=>{
    res.send("Hiii")
})