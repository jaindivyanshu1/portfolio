const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', (req, res) => {
  const { firstName, lastName, email, phoneNumber, topic, message } = req.body;
  console.log('Received form data:', req.body); // Add this line

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact form submission from ${firstName} ${lastName}`,
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Topic: ${topic}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error); // Add this line
      return res.status(500).send(error.toString());
    }
    console.log('Email sent:', info.response); // Add this line
    res.status(200).json({ message: 'Email sent: ' + info.response });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
