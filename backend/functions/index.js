const functions = require('firebase-functions')
const express = require('express');
const nodeMailer = require('nodemailer');
require('dotenv').config();
const app = express();

app.use(express.json());

app.post("/api/contact", async (req, res) => {

    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user:process.env.GMAIL_USER,
            pass:process.env.GMAIL_PASS
        }
    });
    let mailOptions = {
        from:process.env.GMAIL_USER, 
        to:process.env.EMAIL_TO, 
        subject: `Website Form Submission - ${req.body.name}`,
        html: `
            <h4>You have received a new message</h4>
            <p>Name: ${req.body.name}</p>
            <p>Email: ${req.body.email}</p>
            <p>Phone: ${req.body.phone}</p>
            <p>Message: ${req.body.message}</p>
        ` 
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending message');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Message sent successfully');
        }
    });
})

exports.app = functions.https.onRequest(app);

