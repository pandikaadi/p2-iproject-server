'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lat: {
        type: Sequelize.FLOAT
      },
      long: {
        type: Sequelize.FLOAT
      },
      address: {
        type: Sequelize.STRING
      },
      barberId: {
        type: Sequelize.INTEGER,
        references: {
          model: `Barbers`,
          key: `id`
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: `Users`,
          key: `id`
        }
      },
      appointmentDate: {
        type: Sequelize.DATE
      },
      schedule: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Appointments');
  }
};