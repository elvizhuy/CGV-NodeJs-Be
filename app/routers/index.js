const express = require('express')
const rootRouter = express.Router()
const {usersRouter} = require("../routers/users.router")
const {movieRouter} = require("../routers/movies.router")
const {scheduleRouter} = require("../routers/schedule.router")
const { cinemaRouter } = require('./cinema.router')
const { cityRouter } = require('./city.router')
rootRouter.use("/users", usersRouter)
rootRouter.use("/movies", movieRouter)
rootRouter.use("/schedules",scheduleRouter)
rootRouter.use("/cinemas",cinemaRouter)
rootRouter.use("/cities",cityRouter)
module.exports = {
    rootRouter
}
