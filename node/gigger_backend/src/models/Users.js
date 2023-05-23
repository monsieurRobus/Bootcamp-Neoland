const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new mongoose.Schema({

        email: {
            type: String,
            required: [true, 'Please provide an email'],
            trim: true,
            unique: true,
            validate: [validator.isEmail, 'Please provide a valid email']
        },
        name: {
            type: String,
            required: [true, 'Please provide a name'],
            trim: true,
            minlength: [2, 'Name must be at least 2 characters long'],
        },
        password: {
            type: String,
            required: [true, 'Please provide a password'],
            trim: true,
            minlength: [8, 'Password must be at least 8 characters long'],
            validate: [validator.isStrongPassword, 'Password must contain at least 1 uppercase, 1 lowercase, 1 number and 1 symbol']
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            required: true,
        },
        confirmationCode: {
            type: Number,
            required: true,
        },
        check: {
            type: Boolean,
            default: false,
        },
        image: {
            type: String,
        }
    },
    {
        timestamps: true
    }
)

userSchema.pre('save',async (next) => {

    try 
        {
            this.password = await bcrypt.hash(this.password, 10)
            next()
        }
    catch (error) 
        {
            next('Error hashing password', error)
        }

    }

)

const User = mongoose.model('User',UserSchema)

module.exports = User