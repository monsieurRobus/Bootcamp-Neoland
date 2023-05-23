// require('./utils/db')
const {app} = require('./utils/server')
// const songsRoutes = require('./src/routes/song.routes')
// const setlistsRoutes = require('./src/routes/setlist.routes')
const nodemailer = require('nodemailer')
require('dotenv').config()

// app.use("/api/v1/song", songsRoutes);
// app.use("/api/v1/setlist", setlistsRoutes);

const email = process.env.GIGGER_EMAIL
const pass = process.env.GIGGER_PASS


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: pass
    }
})

const mailOptions = {
    from: 'Testeo de cosas ⚠️',
    to: 'cdperez.85@gmail.com',
    subject: 'Hola 😊',
    text: 'Hola, soy un correo desde un servidor. No que un servidor sea un correo, sino que lo estoy enviando desde un servidor... eh... pues eso. Hola uwu, que te quiero uwu.'
}

transporter.sendMail(mailOptions, (err, info) => {

    if (err) {
        console.log(err)
    } else {
        return resizeBy.status(200).json('Email sent' + info.response)
    }

})