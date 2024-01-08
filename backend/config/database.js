const mongoose=require("mongoose")

require("dotenv").config();

exports.dbConnect=()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(console.log("Success in DB Connection"))
    .catch((error) => {
      console.log("DB Connection Failed"), 
      console.error(error),
      process.exit(1);
    })
}
