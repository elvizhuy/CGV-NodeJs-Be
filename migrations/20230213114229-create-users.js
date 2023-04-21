"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.STRING,
      },
      month: {
        type: Sequelize.STRING,
      },
      year: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      region: {
        type: Sequelize.STRING,
      },
      prefer_site: {
        type: Sequelize.STRING,
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull:true
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Client",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
