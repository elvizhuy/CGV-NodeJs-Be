const express = require('express')
const usersRouter = express.Router()
const {registration, login,uploadTrailer} = require("../controllers/users.controller");
const {authenticate} = require("../middleware/Authentication/Auth")
const {uploadTrailers} = require("../middleware/upload/upload-trailers")
const {uploadImages} = require("../middleware/upload/upload-images")

usersRouter.post("/register",registration)
usersRouter.post("/login",login)
usersRouter.post("/upload-avatar",authenticate,uploadImages("user"))


module.exports = {usersRouter}