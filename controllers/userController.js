const {User, Barber} = require('../models')

const register = async(req,res,next) => {
  
  try {
    const { username, email, password } = req.body

    const registeredAcc = await User.create({ username, email, password })
    if (!registeredAcc) {
      throw { name: `FAILED_REGISTER` }
    } else {
      res.status(201).json({ id: registeredAcc.id, email: registeredAcc.email, username: registeredAcc.username })
    }


  } catch (err) {
    next(err)

  }

}

module.exports = {
  register,
}