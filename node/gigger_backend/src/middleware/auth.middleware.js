require('dotenv').config()
const {verifytoken, generateToken} = require('../../utils/token')
const User = require('../models/Users')

const isAuth = async (req, res, next) => {

    const token = req.headers.authorization?.replace('Bearer ', '')

    if(!token) {
        return res.status(401).json('Unauthorized')
    }


    try {

        const decoded = verifytoken(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.id)

        next()

    }
    catch (error) 
    {
        next(error)
    }

}

const isAuthAdmin = async () => {

    const token = req.headers.authorization?.replace('Bearer ', '')

    if(!token) {
        return res.status(401).json('Unauthorized')
    }


    try {

        const decoded = verifytoken(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.id)

            if (req.user.role !== 'admin') {
                return res.status(401).json('Unauthorized')
            }

        next()

        }
        catch (error) 
        {
            next(error)
        }
}



