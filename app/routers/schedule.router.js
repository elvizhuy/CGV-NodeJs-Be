const express = require('express')
const {getScheduleByDate} = require("../controllers/schedule.controller")
const scheduleRouter = express.Router()

scheduleRouter.get("/",getScheduleByDate)

module.exports = {scheduleRouter}