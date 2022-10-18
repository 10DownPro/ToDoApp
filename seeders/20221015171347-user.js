'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [{
       firstName: 'John Doe',
       lastName: 'Last Name',
       email: 'test@testemail.com',
       username: 'taskdoer1',
       password: 'password123',
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
