const Post = require("../../model/Post")

module.exports = async(req,res,next) => {
    try {
        const userId = req.user
        console.log(userId);
        const filePath = req.file
        console.log(filePath);
        const post = await Post.create({
            user : userId,
            url : filePath.path,
            caption : req.body.caption,
        })
        if(post === null) {
            return res.status(400).json({error:"post not uploaded"})
        }
        return res.status(200).json({post})
    }
    catch(err) {
        return res.status(500).json({error:"Some internal server error"});
    }
}