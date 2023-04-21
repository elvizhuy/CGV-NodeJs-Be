"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cinemas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ rooms, schedules, city }) {
      this.hasMany(rooms, { foreignKey: "room_id", as: "Room" });
      this.hasMany(schedules, { foreignKey: "cinema_id", as: "Cinema" });
    //   this.belongsTo(city, { foreignKey: "city_id", as: "City" });
    }
  }

  cinemas.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      city_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "cinemas",
    }
  );
  return cinemas;
};
