const dotenv = require("dotenv")
const express = require("express")
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require("cors")
const app = express()
const router = require("./app/router")
const connectDB = require("./db")
const PORT = 5000

app.use(express.static('uploads'))
app.use(bodyParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(helmet())
app.use(cors())

dotenv.config()
connectDB();

app.use("/api",router)
app.get("/",(req,res)=> {
    return res.json({"message":"Welcome to the backend of WeFriends"})
})

app.listen(PORT,()=> {
    console.log(`Listening at ${PORT}`)
})