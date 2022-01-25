'use strict';
const {createHash} = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
const { options } = require('../app');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Appointment, {foreignKey: `userId`})
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Email must not empty`
        },
        notNull: {
          msg: `Email must not empty`
        },
        isEmail: {
          msg: `Invalid email format`
        },
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Username must not empty`
        },
        notNull: {
          msg: `Username must not empty`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Password must not empty`
        },
        notNull: {
          msg: `Password must not empty`
        },
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance, options) => {
    instance.password = createHash(instance.password)
  })
  return User;
};