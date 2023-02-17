'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({formats,cinemas,movies,rooms}) {
      this.belongsTo(formats,{foreignKey:"format_id",as:"Format"})
      this.belongsTo(cinemas,{foreignKey:"cinema_id",as:"Cinema"})
      this.belongsTo(movies,{foreignKey:"movie_id",as:"Movie"})
      this.belongsTo(rooms,{foreignKey:"room_id",as:"Room"})
    }
  }
  schedules.init({
    start_date: DataTypes.DATE,
    start_time: DataTypes.TIME,
    movie_id: DataTypes.INTEGER,
    format_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER,
    cinema_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'schedules',
  });
  return schedules;
};