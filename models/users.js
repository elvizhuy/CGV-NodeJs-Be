"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      date: DataTypes.STRING,
      month: DataTypes.STRING,
      year: DataTypes.STRING,
      gender: DataTypes.STRING,
      region: DataTypes.STRING,
      prefer_site: DataTypes.STRING,
      avatar: { type: DataTypes.STRING, allowNull: true },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Client",
      },
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
