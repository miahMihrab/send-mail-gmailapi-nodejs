const express = require('express');
const nodemailer = require('nodemailer');
const client = require('./yourClientFile')
const app = express();


app.get('/', (req, res) => {
    let smtpTransport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            type: "OAuth2",
            user: "you_use_emailmehrabmehadi13@gmail.com",
            clientId: yourClientFile.web.client_id,
            clientSecret: yourClientFile.web.client_secret,
            refreshToken: "refresh_token_from_oathplayground"
        }
    });

    let messageTemplate = {
        to: "reciepent_email",
        subject: "Hello",
        text: "Something"
    }

    smtpTransport.sendMail(messageTemplate, (err, info) => {
        if (err) {
            res.send(err)
        } else {
            smtpTransport.close();
            return res.json({
                status: "ok",
                msg: "Email sent"
            })
        }

    })
})



app.listen(3000, () => console.log('Server Up'))