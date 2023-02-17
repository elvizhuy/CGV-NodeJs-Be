'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      cast: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      languages: {
        type: Sequelize.STRING
      },
      running_time: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      trailer: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING(1500)
      },
      status:{
        type:Sequelize.INTEGER(2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
  }
};