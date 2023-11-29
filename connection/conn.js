const db = require('mongoose')
const dotenv = require("dotenv")

dotenv.config()
const url = process.env.db;
const conn  = async () => {
    try {
        await db.connect(url)
        console.log("Database connected...")
    } catch (error) {
        console.log(error)
    }
}
module.exports = conn;