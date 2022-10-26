const User = require("../../model/User")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = async(req,res,next) => {

    let success = false;
    try {   
        const existsuser = await User.find({$or:[{email:req.body.email},{username:req.body.username}]})
        console.log(existsuser)
        if(existsuser.length !== 0) {
            return res.status(400).json({success,error:"User is already exists"})
        }
        const profileImgFile = req.file;
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(req.body.password,salt)

        const user = await User.create({
            firstName : req.body.firstname,
            lastName : req.body.lastname,
            username : req.body.username,
            profileImg : profileImgFile.path,
            email : req.body.email,
            password : hashedpassword,
            gender : null,
            friends : [],
            bio: null
        })

        const data = {
            user : {
                id : user.id
            }
        }
    const authtoken = jwt.sign(data, process.env.JWT_SECERT);
      console.log(authtoken);
      //sending the authtoken as a response
      success = true;
      return res.json({success, authtoken })
    }
    catch(err) {
        return res.status(500).json({success,error:"Some internal server error"})
    }

   
}