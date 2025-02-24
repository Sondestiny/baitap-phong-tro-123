'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AreaFilters', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        
      },
      code: {
        type: Sequelize.STRING
      },
      order: {
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AreaFilters');
  }
};