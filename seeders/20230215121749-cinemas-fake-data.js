'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('cinemas', [
            {

                name: "CGV Long Biên",
                address: "Long Biên HN",
                createdAt: '2023-02-14 07:11:41',
                updatedAt: '2023-02-14 07:11:41'
            },
            {

                name: "CGV Vincom Long Biên",
                address: "Long Biên HN",
                createdAt: '2023-02-14 07:11:41',
                updatedAt: '2023-02-14 07:11:41'
            },
            {

                name: "CGV Vincom Bà Triệu",
                address: "Bà Triệu HN",
                createdAt: '2023-02-14 07:11:41',
                updatedAt: '2023-02-14 07:11:41'
            },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('cinemas', null, {});
    }
};
