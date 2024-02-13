const express=require("express")
const app=express();
const cors=require("cors")
app.use(express.json());
const database=require("./config/database")
const dotenv = require("dotenv");
dotenv.config();
const allowedOrigins = [
	'http://localhost:3000'
  ];

  app.use(cors({
	origin: function (origin, callback) {
	  if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
		callback(null, true);
	  } else {
		callback(new Error('Not allowed by CORS'));
	  }
	}
  }));
database.dbConnect();
const user=require("./routes/user");
const blog=require("./routes/blog");
app.use("/api/v1",user);
app.use("/api/v1",blog);
app.listen(5000,()=>{
    console.log("App Started At 5000 Port")
})

app.get("/",(req,res)=>{
    res.send("Hiii")
})