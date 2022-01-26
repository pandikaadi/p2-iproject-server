const errorHandler = (err, req, res, next) => {

  switch(err.name) {
      case `JsonWebTokenError`:
      case `unAuth`:
          res.status(401).json({ message: `Invalid token`})
          break;
      case `TokenExpiredError`:
          res.status(401).json({ message: `Token expired`})
          break;
      case `Forbidden`:
          res.status(403).json({message: `Unauthorized`})
          break;
      case `NotFound`:
          res.status(404).json({message: `Barber not found`})
          break;
      case `SequelizeValidationError`:
          res.status(400).json({message: err.errors[0].message})
          break;
      case `SequelizeUniqueConstraintError`:
          res.status(400).json({message: err.errors[0].message})
          break;
      case `FAILED_REGISTER`:
      case `SequelizeDatabaseError`:
          res.status(400).json({message: "Bad Request"})
          break;
      case `AppointmentNotFound`:
          res.status(400).json({message: "Appointment not found"})
      case `uniqueAppointment`:
          res.status(400).json({message: "Could not make more than one appointment"})
          break;
      case `INVALID_CREDS`:
          res.status(401).json({ message: `Invalid email or password`})
          break;
      default:
          res.status(500).json({message: `Internal server errror`})
          break;
  }

}

module.exports = errorHandler