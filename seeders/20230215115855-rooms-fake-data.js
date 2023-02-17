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
        await queryInterface.bulkInsert('rooms',
            [
                {

                    room_number: "cinema 1",
                    room_type: '2D',

                    createdAt: '2023-02-14 07:11:41',
                    updatedAt: '2023-02-14 07:11:41'
                },
                {

                    room_number: "cinema 2",
                    room_type: '3D',

                    createdAt: '2023-02-14 07:11:41',
                    updatedAt: '2023-02-14 07:11:41'
                },
                {

                    room_number: "cinema 3",
                    room_type: '4DX',

                    createdAt: '2023-02-14 07:11:41',
                    updatedAt: '2023-02-14 07:11:41'
                },
                {

                    room_number: "cinema 4",
                    room_type: '3D',

                    createdAt: '2023-02-14 07:11:41',
                    updatedAt: '2023-02-14 07:11:41'
                },
                {

                    room_number: "cinema 5",
                    room_type: 'IMAX',

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
        await queryInterface.bulkDelete('rooms', null, {});
    }
};
