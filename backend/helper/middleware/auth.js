const jwt = require("jsonwebtoken")

function authMiddleware(req,res,next) {
    const bearer = req.headers.authorization
    const token = bearer.split(" ")[1]
    if(!token) {
        return res.json({tokenError:"Token is not valid"})
    }
    const data = jwt.verify(token,process.env.JWT_SECERT)
    req.user = data.user.id
    next()
}
module.exports = authMiddleware