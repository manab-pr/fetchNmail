const nodemailer = require("nodemailer");
require("dotenv").config();

const SendMail = async (Polakadot,username,Message) => {
  const transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: "New Form Submission",
    text: `
              Polakadot: ${Polakadot}
              Username: ${username}
              Message: ${Message}
          `,
  };

  const info = await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Form submitted successfully");
    }
  });
};

module.exports = SendMail;
