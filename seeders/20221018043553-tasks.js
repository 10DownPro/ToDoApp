'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Tasks', [{
      username: 'username',
      task: '',
      isComplete: false,
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
 }
};

