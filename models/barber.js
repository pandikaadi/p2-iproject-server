'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Barber.hasMany(models.Appointment, {foreignKey: `barberId`})
    }
  };
  Barber.init({
    name: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    long: DataTypes.FLOAT,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Barber',
  });
  return Barber;
};