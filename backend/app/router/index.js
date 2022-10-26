const router = require("express").Router({mergeParams:true})
const account = require("./Account")
const post = require("./Post")

router.use("/account",account)
router.use("/post",post)

module.exports = router