const express = require('express')
const app = express()
const dotenv=require("dotenv")
const fileUpload = require('express-fileupload')
const db = require('./connection/conn')
const routes = require('./routes/userRoute')
dotenv.config()
const port=process.env.Port
app.use(fileUpload())

db()

app.use("/user", routes)


app.listen(port, () => {
    console.log(`app is running on... ${port}`)
})