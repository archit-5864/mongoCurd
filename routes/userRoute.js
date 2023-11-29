const express = require('express')
const { createUser } = require('../controller/userController')
const routes = express.Router()

routes.post("/createUser", createUser)


module.exports = routes