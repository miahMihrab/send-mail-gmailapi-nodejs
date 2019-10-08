const express = require('express');
const nodemailer = require('nodemailer');
const client = require('./client')
const app = express();


app.get('/', (req, res) => {
    let smtpTransport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            type: "OAuth2",
            user: "mehrabmehadi13@gmail.com",
            clientId: client.web.client_id,
            clientSecret: client.web.client_secret,
            refreshToken: "1/owJa6veaqu2Hp5qFvcgJGbzfTymONYRzXotd1r-HgOI"
        }
    });

    let messageTemplate = {
        to: "mihrabmiah13@gmail.com",
        subject: "Hello",
        text: "Hi from mehrab"
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