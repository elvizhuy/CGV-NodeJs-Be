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
        await queryInterface.bulkInsert('movies',
            [
                {
                    name: 'TITANIC',
                    director: 'James Cameron',
                    cast: 'Leonardo DiCaprio, Kate Winslet, Billy Zane',
                    genre: 'Drama, Romance',
                    languages: 'English with Vietnamese subtitle',
                    running_time: '194 minutes',
                    photo: 'https://www.cgv.vn/media/catalog/product/cache/3/image/c5f0a1eff4c394a251036189ccddaacd/r/s/rsz_poster.jpg',
                    trailer: 'https://www.youtube.com/watch?v=nriaD_8Ktic',
                    release_date: 'Feb 10 2023',
                    description: 'Titanic, one of the most beloved tragic romantic classics, ' +
                        'is returning to cinemas on February 10, in celebration of its 25th anniversary. ' +
                        'NOTE: TITANIC is a T-16 rating movie - MOVIES ARE ALLOWED TO BE DISSEMINATED TO VIEWERS AGED 16 YEARS AND OVER (16+)',
                    status:1,
                    createdAt: '2023-02-14 07:11:41',
                    updatedAt: '2023-02-14 07:11:41'
                },
                {
                    name: 'BABYLON',
                    director: 'Damien Chazelle',
                    cast: 'Brad Pitt, Margot Robbie, Diego Calva, Jean Smart, Jovan Adepo, Li Jun Li',
                    genre: 'Drama, Comedy',
                    languages: 'English with Vietnamese subtitle',
                    running_time: '188 minutes',
                    photo: 'https://www.cgv.vn/media/catalog/product/cache/3/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/b/a/babylon-700x1000px.jpg',
                    trailer: 'https://www.youtube.com/watch?v=dNOnx46FXrI',
                    release_date: 'Feb 3 2023',
                    description: 'From Damien Chazelle, BABYLON is an original epic set in 1920s Los Angeles led by Brad Pitt, Margot Robbie and Diego Calva, with an ensemble cast including Jovan Adepo, Li Jun Li and Jean Smart. A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood',
                    status:0,
                    createdAt: '2023-02-14 07:11:41',
                    updatedAt: '2023-02-14 07:11:41'
                },
                {
                    name: 'AVATAR: THE WAY OF WATER',
                    director: 'James Cameron',
                    cast: 'Sam Worthington, Zoe Saldana, Dương Tử Quỳnh,...',
                    genre: 'Action, Adventure, Science Fiction',
                    languages: 'English with Vietnamese subtitle',
                    running_time: '192 minutes',
                    photo: 'https://www.cgv.vn/media/catalog/product/cache/3/image/c5f0a1eff4c394a251036189ccddaacd/a/v/avatar_2_payoff_posster_2_.jpg',
                    trailer: 'https://www.youtube.com/watch?v=Ru4Jbmh7bcQ',
                    release_date: 'Dec 16 2022',
                    description: 'Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na\'vi race to protect their planet.\n',
                    status:1,
                    createdAt: '2023-02-14 07:11:41',
                    updatedAt: '2023-02-14 07:11:41'
                },
                {
                    name: 'PUSS IN BOOTS: THE LAST WISH',
                    director: 'Joel Crawford',
                    cast: 'Antonio Banderas, Salma Hayek, Olivia Colman, Harvey Guillén, Samson Kayo,…',
                    genre: 'Adventure, Animation, Comedy',
                    languages: 'English with Vietnamese subtitle',
                    running_time: '103 minutes',
                    photo: 'https://www.cgv.vn/media/catalog/product/cache/3/image/c5f0a1eff4c394a251036189ccddaacd/p/u/puss_in_boots_30.12.22_700x1000px.png',
                    trailer: 'https://www.youtube.com/watch?v=BsmTzEdX17U',
                    release_date: 'Dec 30 2022',
                    description: 'Titanic, one of the most beloved tragic romantic classics, ' +
                        'is returning to cinemas on February 10, in celebration of its 25th anniversary. ' +
                        'NOTE: TITANIC is a T-16 rating movie - MOVIES ARE ALLOWED TO BE DISSEMINATED TO VIEWERS AGED 16 YEARS AND OVER (16+)',
                    status:0,
                    createdAt: '2023-02-14 07:11:41',
                    updatedAt: '2023-02-14 07:11:41'
                },
                {
                    name: 'TITANIC',
                    director: 'James Cameron',
                    cast: 'Leonardo DiCaprio, Kate Winslet, Billy Zane',
                    genre: 'Drama, Romance',
                    languages: 'English with Vietnamese subtitle',
                    running_time: '194 minutes',
                    photo: 'https://www.cgv.vn/media/catalog/product/cache/3/image/c5f0a1eff4c394a251036189ccddaacd/r/s/rsz_poster.jpg',
                    trailer: 'https://www.youtube.com/watch?v=nriaD_8Ktic',
                    release_date: 'Feb 10 2023',
                    description: 'Titanic, one of the most beloved tragic romantic classics, ' +
                        'is returning to cinemas on February 10, in celebration of its 25th anniversary. ' +
                        'NOTE: TITANIC is a T-16 rating movie - MOVIES ARE ALLOWED TO BE DISSEMINATED TO VIEWERS AGED 16 YEARS AND OVER (16+)',
                    status:1,
                    createdAt: '2023-02-14 07:11:41',
                    updatedAt: '2023-02-14 07:11:41'
                },
                {
                    name: 'BABYLON',
                    director: 'Damien Chazelle',
                    cast: 'Brad Pitt, Margot Robbie, Diego Calva, Jean Smart, Jovan Adepo, Li Jun Li',
                    genre: 'Drama, Comedy',
                    languages: 'English with Vietnamese subtitle',
                    running_time: '188 minutes',
                    photo: 'https://www.cgv.vn/media/catalog/product/cache/3/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/b/a/babylon-700x1000px.jpg',
                    trailer: 'https://www.youtube.com/watch?v=dNOnx46FXrI',
                    release_date: 'Feb 3 2023',
                    description: 'From Damien Chazelle, BABYLON is an original epic set in 1920s Los Angeles led by Brad Pitt, Margot Robbie and Diego Calva, with an ensemble cast including Jovan Adepo, Li Jun Li and Jean Smart. A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood',
                    status:0,
                    createdAt: '2023-02-14 07:11:41',
                    updatedAt: '2023-02-14 07:11:41'
                },
                {
                    name: 'AVATAR: THE WAY OF WATER',
                    director: 'James Cameron',
                    cast: 'Sam Worthington, Zoe Saldana, Dương Tử Quỳnh,...',
                    genre: 'Action, Adventure, Science Fiction',
                    languages: 'English with Vietnamese subtitle',
                    running_time: '192 minutes',
                    photo: 'https://www.cgv.vn/media/catalog/product/cache/3/image/c5f0a1eff4c394a251036189ccddaacd/a/v/avatar_2_payoff_posster_2_.jpg',
                    trailer: 'https://www.youtube.com/watch?v=Ru4Jbmh7bcQ',
                    release_date: 'Dec 16 2022',
                    description: 'Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na\'vi race to protect their planet.\n',
                    status:1,
                    createdAt: '2023-02-14 07:11:41',
                    updatedAt: '2023-02-14 07:11:41'
                },
                {
                    name: 'PUSS IN BOOTS: THE LAST WISH',
                    director: 'Joel Crawford',
                    cast: 'Antonio Banderas, Salma Hayek, Olivia Colman, Harvey Guillén, Samson Kayo,…',
                    genre: 'Adventure, Animation, Comedy',
                    languages: 'English with Vietnamese subtitle',
                    running_time: '103 minutes',
                    photo: 'https://www.cgv.vn/media/catalog/product/cache/3/image/c5f0a1eff4c394a251036189ccddaacd/p/u/puss_in_boots_30.12.22_700x1000px.png',
                    trailer: 'https://www.youtube.com/watch?v=BsmTzEdX17U',
                    release_date: 'Dec 30 2022',
                    description: 'Titanic, one of the most beloved tragic romantic classics, ' +
                        'is returning to cinemas on February 10, in celebration of its 25th anniversary. ' +
                        'NOTE: TITANIC is a T-16 rating movie - MOVIES ARE ALLOWED TO BE DISSEMINATED TO VIEWERS AGED 16 YEARS AND OVER (16+)',
                    status:0,
                    createdAt: '2023-02-14 07:11:41',
                    updatedAt: '2023-02-14 07:11:41'
                }

            ], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('movies', null, {});
    }
};
