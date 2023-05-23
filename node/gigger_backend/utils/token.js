require('dotenv').config()
const jwt = require('jsonwebtoken')

const generateToken = (id, email) => {

    if (!id || !email) {
        throw new Error('No id or email provided')
    }
    else 
    {
        return jwt.sign({id,email}, process.env.JWT_SECRET, {expiresIn: '1d'})
    }

}

const verifyToken = (token) => {

    if (!token) {
        throw new Error('No token provided')
    }
    else 
    {
        return jwt.verify(token, process.env.JWT_SECRET)
    }


}

module.exports = {
    generateToken,
    verifyToken
}
