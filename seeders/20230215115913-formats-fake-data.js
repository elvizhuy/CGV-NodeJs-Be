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
        await queryInterface.bulkInsert('formats', [
            {
                format_type: "2D",
                createdAt: '2023-02-14 07:11:41',
                updatedAt: '2023-02-14 07:11:41'
            },
            {
                format_type: "3D",
                createdAt: '2023-02-14 07:11:41',
                updatedAt: '2023-02-14 07:11:41'
            },
            {
                format_type: "IMax",
                createdAt: '2023-02-14 07:11:41',
                updatedAt: '2023-02-14 07:11:41'
            },
            {
                format_type: "4DX",
                createdAt: '2023-02-14 07:11:41',
                updatedAt: '2023-02-14 07:11:41'
            },
            {
                format_type: "4DX",
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
        await queryInterface.bulkDelete('formats', null, {});
    }
};
