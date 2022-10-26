const User = require("../../model/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
module.exports = async(req,res,next) => {
    let success = false;
    try {
        const user = await User.findOne({username : req.body.username})

        console.log(user)
        if(user === null || user === undefined) {
            return res.status(400).json({success,error:"User not found"})
        }
        let comparedPassword = await bcrypt.compare(req.body.password,user.password)
        if(!comparedPassword) {
            return res.status(400).json({success,error:"Wrong credentials"})
        }
        console.log(`comparedpassword : ${comparedPassword}`)
        const data = {
            user : {
                id : user.id
            }
        }
        const authtoken = jwt.sign(data, process.env.JWT_SECERT);
        success = true;
        return res.status(200).json({success,authtoken})
    }
    catch(err) {
        return res.status(500).json({error:"Internal server error"})
    }
}