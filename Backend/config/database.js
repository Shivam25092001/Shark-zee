const mongoose = require("mongoose");
const url = process.env.DB_URL;
const connectDb = ()=>{
    mongoose
    .connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      autoIndex: true,
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((e) => {
      console.log("error in connecting to database: " + e);
    });
} 

module.exports = connectDb
