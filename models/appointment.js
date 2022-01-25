'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointment.belongsTo(models.User, {foreignKey: `userId`})
      Appointment.belongsTo(models.Barber, {foreignKey: `barberId`})
    }
  };
  Appointment.init({
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `coordinates must not empty`
        },
        notNull: {
          msg: `coordinates must not empty`
        },
      }
    },
    long: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `coordinates must not empty`
        },
        notNull: {
          msg: `coordinates must not empty`
        },
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `address must not empty`
        },
        notNull: {
          msg: `address must not empty`
        },
      }
    },
    barberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `barber must not empty`
        },
        notNull: {
          msg: `barber must not empty`
        },
      }
    },
    userId: DataTypes.INTEGER,
    appointmentDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `date must not empty`
        },
        notNull: {
          msg: `date must not empty`
        },
      }
    },
    schedule: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `schedule must not empty`
        },
        notNull: {
          msg: `schedule must not empty`
        },
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};