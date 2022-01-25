const { User, Barber } = require("../models");

const  getBarbers = async(req, res, next) => {
  try {

    const barbers = await Barber.findAll();
    res.status(200).json(barbers);
    
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getBarbers
};
