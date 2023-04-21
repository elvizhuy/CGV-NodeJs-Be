const { Op } = require("sequelize");
const { cinemas } = require("../../models");

const getCinemaByCity = async (req, res) => {
  const { city_id } = req.params;
  console.log(city_id)
  try {
    const cinema = await cinemas.findAll({
      where: {
        city_id: city_id,
      },
    });
    if (cinema) {
      res.status(200).send(cinema);
    }
  } catch (e) {
    res.status(401).send(e);
    // {message: "Can not find cinema"}
  }
};

module.exports = { getCinemaByCity };
