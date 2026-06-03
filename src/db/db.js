const mongoose = require("mongoose");

async function connectDb(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB Connected")
    }catch(err){
        console.log("DB Connection Failed");
        process.exit(1);
    }
}

module.exports = connectDb