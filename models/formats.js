'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class formats extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({schedules}) {
            this.hasMany(schedules, {foreignKey: "format_id", as: "Format"})
        }
    }

    formats.init({
        format_type: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'formats',
    });
    return formats;
};