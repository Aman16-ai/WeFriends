const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        require:true
    },
    lastName: {
        type:String,
        require:true
    },
    username : {
        type:String,
        require:true
    },
    email : {
        type:String,
        require:true
    },
    password: {
        type:String,
        require:true
    },
    profileImg: {
        type:String,
    },
    gender : {
        type:String,
    },
    friends : [{
        type:mongoose.Schema.Types.ObjectId,
        ref : "User"
    }],
    bio : {
        type:String
    }

},{timestamps:true})

module.exports = mongoose.model("User",userSchema);