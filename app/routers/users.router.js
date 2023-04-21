const express = require('express')
const usersRouter = express.Router()
const {registration, login,uploadUserAvatar} = require("../controllers/users.controller");
const {authenticate} = require("../middleware/Authentication/Auth")
const {uploadAvatar} = require("../middleware/upload/upload.avatar")
const {checkExist} = require('../middleware/checkExist/checkExist')


usersRouter.post("/register", checkExist, registration)
usersRouter.post("/login", login)
usersRouter.post("/upload-avatar", authenticate, uploadAvatar("avatar"),uploadUserAvatar)


module.exports = {usersRouter}