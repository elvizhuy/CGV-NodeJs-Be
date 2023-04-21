const express = require("express");
const { getAllCity } = require("../controllers/city.controller");

const cityRouter = express.Router();

cityRouter.get("/get-all-city", getAllCity);
module.exports = { cityRouter };
