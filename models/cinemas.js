'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class cinemas extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({rooms,schedules}) {
            this.hasMany(rooms, {foreignKey: "room_id", as: 'Room'})
            this.hasMany(schedules,{foreignKey:"cinema_id",as:"Cinema"})
        }
    }

    cinemas.init({
        name: DataTypes.STRING,
        address: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'cinemas',
    });
    return cinemas;
};