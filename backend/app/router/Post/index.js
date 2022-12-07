const router = require("express").Router({mergeParams:true})
const post = require("./post")
const authMiddleware = require("../../../helper/middleware/auth")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,"uploads/Post")
    },
    filename: function(req,file,cb) {
        cb(null,new Date().getMilliseconds() + file.originalname)
    }
})
const upload = multer({storage : storage})
router.post("/upload",authMiddleware,upload.single('image'),post)

module.exports = router