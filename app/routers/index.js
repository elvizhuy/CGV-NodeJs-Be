const express = require('express')
const rootRouter = express.Router()
const {usersRouter} = require("../routers/users.router")
const {movieRouter} = require("../routers/movies.router")
const {scheduleRouter} = require("../routers/schedule.router")
rootRouter.use("/users", usersRouter)
rootRouter.use("/movies", movieRouter)
rootRouter.use("/schedules",scheduleRouter)
module.exports = {
    rootRouter
}
