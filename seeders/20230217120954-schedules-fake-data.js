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
        await queryInterface.bulkInsert('schedules',
            [
                {
                    start_date: '2023-02-14',
                    start_time: '15:20:00',
                    movie_id: 1,
                    format_id: 1,
                    room_id: 1,
                    cinema_id: 1,
                    createdAt: '2023-02-14 07:11:41',
                    updatedAt: '2023-02-14 07:11:41'
                },
                {
                    start_date: '2023-02-16',
                    start_time: '15:40:00',
                    movie_id: 5,
                    format_id: 2,
                    room_id: 2,
                    cinema_id: 2,
                    createdAt: '2023-02-14 07:11:41',
                    updatedAt: '2023-02-14 07:11:41'
                },
                {
                    start_date: '2023-02-13',
                    start_time: '17:00:00',
                    movie_id: 4,
                    format_id: 3,
                    room_id: 3,
                    cinema_id: 3,
                    createdAt: '2023-02-14 07:11:41',
                    updatedAt: '2023-02-14 07:11:41'
                },
                {
                    start_date: '2023-02-15',
                    start_time: '19:40:00',
                    movie_id: 3,
                    format_id: 4,
                    room_id: 4,
                    cinema_id: 4,
                    createdAt: '2023-02-14 07:11:41',
                    updatedAt: '2023-02-14 07:11:41'
                },
                {
                    start_date: '2023-02-18',
                    start_time: '19:40:00',
                    movie_id: 5,
                    format_id: 5,
                    room_id: 5,
                    cinema_id: 5,
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
        await queryInterface.bulkDelete('schedules', null, {});
    }
};
