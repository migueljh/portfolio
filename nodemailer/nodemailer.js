const nodemailer = require("nodemailer");
const express = require("express");
const cors = require('cors');
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
let port = process.env.PORT || 8080

server.post("/send-email", (req, res) => { 
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mhwebcontact94@gmail.com",
      pass: "Clumsy95",
    },
  });

  const mailOptions = {
    from: email,
    to: "miguelhernandezjp@gmail.com",
    subject: `You have a new message`,
    html: 
    `<h4>You have received a new message from: </h4>
     <strong>Name</strong>: ${name}<br/> 
     <strong>Email</strong>: ${email} <br/> 
     <strong>Message</strong>: ${message}</>
     <br/>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).json(error.message);
    } else {
      res.status(200).json("Email enviado");
    } 
  });
});

server.listen(8080, () => {
  console.log("server running in port");
});
