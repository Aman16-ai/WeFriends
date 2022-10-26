const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    url: {
        type: String,
        require: true
    },
    caption: {
        type:String,
    },
    likes: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }, 
        likedAt: {
            type:Date,
            default: Date.now
        }
    }],

    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            comment : {
                type:String,
                require:true
            },
            commentedAt : {
                type:Date,
                default:Date.now
            }
        }
    ]

},{timestamps:true})

module.exports = mongoose.model("Post",postSchema)