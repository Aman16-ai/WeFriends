const User = require("../../model/User")

module.exports = async(req,res,next) => {
    try {
        const userId = req.user
        const user = await User.findById(userId).select("-password")
        if(!user) {
            return res.status(400).json({error:"User is not found"})
        }
        return res.status(200).json({profile : user})

    }
    catch(err) {
        return res.status(400).json({error:"Some internal server error"});
    }
}