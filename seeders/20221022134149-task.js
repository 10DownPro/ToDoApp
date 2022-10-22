'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Task', [{
      task: 'Something I helped put in space',
      isComplete: false,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Task', null, {});
 }
};

