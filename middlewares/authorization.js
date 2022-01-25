const { Appointment } = require(`../models`)

const authorization = async(req, res, next) => {
    
    try {
      const {appointmentId} = req.params
      
      const appointment = await Appointment.findByPk(appointmentId)

      if(!appointment) {
        throw({name:`AppointmentNotFound`})
      } else {
        console.log(appointment);
        if(appointment.userId === req.currentUser.id) {
          next()
        } else {
          throw({name: `Forbidden`})
        }

      }
      
    } catch (error) {

      next(error)
      
    }
}

module.exports = authorization