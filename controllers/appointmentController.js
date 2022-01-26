const { User, Barber, Appointment } = require("../models");
const { Op } = require("sequelize")

const nodemailer = require('nodemailer');
const axios = require('axios')

const translateCoordinate = async (req, res, next) => {
  const {lat, long} = req.body
  
  try {
    
    const translated = await axios({
      method: 'get',
      url: `https://nominatim.openstreetmap.org/reverse?lat=${+lat}&lon=${+long}&format=json`  
    })
    res.status(200).json(translated.data.display_name);

  } catch (error) {

    next(error)
    
  }

}

const getWeatherForecast = async (req, res, next) => {
  const {city} = req.query
  
  try {
    
    
    const forecast = await axios({
      method: 'get',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}`  
    })
    res.status(200).json(forecast.data);

  } catch (error) {

    next(error)
    
  }

}

const createAppointment = async (req, res, next) => {

  try {
    
    const {barberId} = req.params
    const {lat, long, address, appointmentDate, schedule, price} = req.body

    const barber = await Barber.findByPk(barberId)
    if(barber) {

      const findApp = await Appointment.findOne({
        where: {
          userId: req.currentUser.id,
        }
      })

      if(findApp) {
        throw({name: `uniqueAppointment`})
      } else {

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
      },
      include: [Barber]
    })

    if(appointment) {
      res.status(200).json(appointment)

    } else {
      res.status(200).json(null)
    } 
  } catch (error) {
    

    next(error)
    
  }
}

const getAllAppointment = async(req, res, next) => {
    
  try {

    const {selectedDate, barberId} = req.query

    const recordedDate = selectedDate.split('').splice(0,11).join('')
    let startDate = new Date(recordedDate + "00:00:00.000Z")

    let endDate = new Date(recordedDate + "23:59:59.999Z")


    const appointments = await Appointment.findAll({
      where: {
        appointmentDate: {
          [Op.between]: [startDate, endDate]
        },
        barberId
      }
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

    const appointments = await Appointment.destroy({
      where: {
        userId: req.currentUser.id
      }
    })

    if(appointments) {
      res.status(200).json(appointments)

    } 
  } catch (error) {

    next(error)
    
  }
}

const editAppointment = async(req, res, next) => {
    
  try {

    const {lat, long, address, barberId, appointmentDate, schedule, price} = req.body

    const appointments = await Appointment.update({
      lat,
      long,
      address,
      appointmentDate,
      schedule,
      price
    },{
      where: {
        userId: req.currentUser.id,
        barberId
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
  deleteAppointment,
  translateCoordinate,
  getWeatherForecast,
  editAppointment
}
