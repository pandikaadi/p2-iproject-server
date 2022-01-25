const { returnToPayload } = require("../helpers/jwt")
const {User} = require("../models/")

const authentication = async (req, res, next) => {
    try {
        const { access_token } = req.headers
        const payload = returnToPayload(access_token)
        const user = await User.findByPk(payload.id)

        
        if(user) {
            req.currentUser = {id: user.id, username: user.username, email: user.email}
            next()
        } else {
            throw ( {
                name: `unAuth`
            })
        }


    } catch (error) {
            next(error)
    }
}

module.exports = authentication