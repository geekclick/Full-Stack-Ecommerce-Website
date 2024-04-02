const mongoose = require('mongoose');

// const  URL = "mongodb://127.0.0.1:27017/Ecommerce";
var DATABASE_URL = "Ecommerce"

const connectionDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB is Connected");
    } catch (error) {
        console.error("This connection could not be make",error);
        process.exit(0);
    }
}

module.exports = connectionDB;