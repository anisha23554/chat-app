// establishing connection with db
const mongoose = require("mongoose")

const connStr = process.env.MONGODB_CONN_STRING

console.log(connStr)
const connectDb = async()=>{
    // connecting with mongoDB
    try{
        const res =  await mongoose.connect(connStr);
        console.log("connected to MongoDB...")
    }
    catch(error){
      console.log(error.message)
    }
}

module.exports = connectDb