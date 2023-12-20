const nodemailer = require("nodemailer");
require("dotenv").config();

const SendMail = async (Polakadot,username,Message) => {
  const transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "manabpwork@gmail.com",
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: "manabpwork@gmail.com",
    to: "sekhmehboob7@gmail.com",
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
