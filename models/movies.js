'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class movies extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({schedules}) {
            this.hasMany(schedules, {foreignKey: "movie_id", as: "Movie"})
        }
    }

    movies.init({
        name: DataTypes.STRING,
        director: DataTypes.STRING,
        cast: DataTypes.STRING,
        genre: DataTypes.STRING,
        languages: DataTypes.STRING,
        running_time: DataTypes.STRING,
        photo: DataTypes.STRING,
        trailer: DataTypes.STRING,
        release_date: DataTypes.STRING,
        description: DataTypes.STRING(1500),
        status: {
            type: DataTypes.INTEGER(2),
            defaultValue: 0
        },
    }, {
        sequelize,
        modelName: 'movies',
    });
    return movies;
};