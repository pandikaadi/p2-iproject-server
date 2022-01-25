const { User, Barber, Appointment } = require("../models");

const createAppointment = async (req, res, next) => {

  try {
    const {barberId} = req.params
    const {lat, long, address, appointmentDate, schedule, price} = req.body

    const barber = await Barber.findByPk(barberId)
    if(barber) {

      const newApp = await Appointment.create({
        lat, 
        long, 
        address, 
        appointmentDate, 
        schedule, 
        price,
        barberId,
        userId: req.currentUser.id
      })

      if(newApp) {

        res.status(201).json(newApp)

      } else {
        throw({name: `internal`})
      }

    } else {
      throw({name:`NotFound`})
    }
  } catch (error) {

    next(error)
    
  }
}

const getMyAppointment = async(req, res, next) => {
    
  try {

    const appointment = await Appointment.findOne({
      where: {
        userId: req.currentUser.id
      }
    })

    if(appointment) {
      res.status(200).json(appointment)

    } 
  } catch (error) {

    next(error)
    
  }
}

const getAllAppointment = async(req, res, next) => {
    
  try {

    const appointments = await Appointment.findAll({
    })

    if(appointments) {
      res.status(200).json(appointments)

    } 
  } catch (error) {

    next(error)
    
  }
}

module.exports = {
  createAppointment,
  getMyAppointment,
  getAllAppointment
}
