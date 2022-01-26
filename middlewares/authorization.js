const { Appointment } = require(`../models`)

const authorization = async(req, res, next) => {
    
    try {
      
      
      const appointment = await Appointment.findOne({
        where: {
          userId: req.currentUser.id
        }
      })

      if(!appointment) {
        throw({name:`AppointmentNotFound`})
      } else {
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