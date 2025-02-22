'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Otps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        unique:true,
        type: Sequelize.INTEGER
      },
      email: {
        primaryKey: true,
        validate: {
          isEmail: true
        },
        type: Sequelize.STRING
      },
      otp: {
        allowNull: false,
        validate: {
          isNumeric:true
        },
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
    await queryInterface.dropTable('Otps');
  }
};