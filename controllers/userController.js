const {User, Barber} = require('../models')
const {compareHashWithPlain} = require('../helpers/bcrypt')
const {createToken} = require('../helpers/jwt')

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

const login = async(req,res,next) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })
    if (!user) {
      throw { name: `INVALID_CREDS` }
    }


      if (!compareHashWithPlain(password, user.password)) {
        throw { name: `INVALID_CREDS` }
      } else {
        const payload = {
          id: user.id
        }
  
        const token = createToken(payload)
  
        res.status(200).json({ access_token: token, id: user.id, username: user.username })
      }
    } catch(err) {
        next(err)
    }



}

module.exports = {
  register,
  login
}