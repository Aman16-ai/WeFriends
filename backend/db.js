const mongoose = require("mongoose")

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL,()=> {
        console.log("MongoDb successfully connected")
    })
}

module.exports = connectDB