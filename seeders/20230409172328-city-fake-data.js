'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('cities', [
      {
        name: 'Hà Nội',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Hồ Chí Minh',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Đà Nẵng',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Cần Thơ',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Đồng Nai',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Đà Nẵng',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Hải Phòng',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Quảng Ninh',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Bà Rịa-Vũng Tàu',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Bình Định',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Bình Dương',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Kiên Giang',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Vĩnh Long',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Yên Bái',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Trà Vinh',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Đắk Lắk',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Hậu Giang',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Hà Tĩnh',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Phú Yên',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Đồng Tháp',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Hưng Yên',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Phú Thọ',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Nghệ An',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Lạng Sơn',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Kon Tum',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Khánh Hòa',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Quảng Ngãi',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Sóc Trăng',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Sơn La',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Tây Ninh',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Thái Nguyên',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
       {
        name: 'Tiền Giang',
        createdAt: '2023-04-10 07:11:41',
        updatedAt: '2023-04-10 07:11:41',
       },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('cities', null, {});
  }
};
