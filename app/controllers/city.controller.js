const { Op } = require("sequelize");
const { city } = require("../../models");

const getAllCity = async (req, res) => {
  try {
    const cities = await city.findAll();
    if (cities) {
      res.status(200).send(cities);
    }
  } catch (e) {
    res.status(401).send(e);
    // {message: "Can not find city"}
  }
};

module.exports = { getAllCity };
