'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class rooms extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({schedules}) {
            this.hasMany(schedules, {foreignKey: "room_id", as: "Room"})
        }
    }

    rooms.init({
        room_number: DataTypes.STRING,
        room_type: DataTypes.STRING,
        cinema_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'rooms',
    });
    return rooms;
};