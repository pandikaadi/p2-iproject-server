const { User, Barber } = require("../models");

const  getBarbers = async(req, res, next) => {
  try {


    const barbers = await Barber.findAll({
      where: {
        city: `${req.query.city}` 
      }
    });
    res.status(200).json(barbers);
    
  } catch (err) {
    next(err);
  }
};

const  getOneBarber = async(req, res, next) => {
  try {


    const barber = await Barber.findByPk(req.params.barberId)
    if(barber) {
      res.status(200).json(barber);
    } else {
      throw({name: `NotFound`})
    }
    
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getBarbers,
  getOneBarber
};
