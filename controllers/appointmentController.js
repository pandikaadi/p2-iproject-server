const { User, Barber, Appointment } = require("../models");

const nodemailer = require('nodemailer');

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

        let mailTransporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: 'shavetiv8@gmail.com',
              pass: process.env.PASS_EMAIL
          }
      });
        
      let mailDetails = {
          from: 'shavetiv8@gmail.com',
          to: req.currentUser.email,
          subject: 'Success create a new booking',
          text: `hi, ${req.currentUser.email}!
          you have created a new booking on ${newApp.appointmentDate}`
      };
        
      mailTransporter.sendMail(mailDetails, function(err, data) {
          if(err) {
              next(err)
          } else {
            res.status(201).json(newApp)
          }
      });


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

const deleteAppointment = async(req, res, next) => {
    
  try {
    console.log(`hehehe`);

    const appointments = await Appointment.destroy({
      where: {
        id: req.params.appointmentId
      }
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
  getAllAppointment,
  deleteAppointment
}
