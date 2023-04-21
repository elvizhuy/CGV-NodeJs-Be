const express = require("express")
const { getCinemaByCity } = require("../controllers/cinema.controller")
const { getAllCity } = require("../controllers/city.controller");
const cinemaRouter = express.Router()

cinemaRouter.get("/get-cinema-list/:city_id",getCinemaByCity)


module.exports = {cinemaRouter}