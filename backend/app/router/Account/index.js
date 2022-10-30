const router = require("express").Router({mergeParams:true})
const register = require("./Register")
const login = require("./login")
const getUserProfile = require("./getUserProfile")
const authMiddleware = require("../../../helper/middleware/auth")
const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,"uploads/ProfileImg")
    },
    filename : function(req,file,cb) {
        cb(null,new Date().getMilliseconds() + file.originalname)
    }
})
const upload = multer({storage : storage})

router.post("/register",upload.single('image'),register)
router.post("/login",login)
router.get("/getUserProfile",authMiddleware,getUserProfile)
module.exports = router