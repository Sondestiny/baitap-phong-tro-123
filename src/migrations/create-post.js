'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      star: {
        type: Sequelize.STRING
      },
      labelcode: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      attributesID: {
        type: Sequelize.STRING
      },
      categoryCode: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      userID: {
        type: Sequelize.STRING
      },
      overviewID: {
        type: Sequelize.STRING
      },
      imagesID: {
        type: Sequelize.STRING
      },
      codePrice: {
        type: Sequelize.STRING
      },
      codeArea: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};