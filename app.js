const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const sendMail = require("./controller/sendMail");
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

//middleware
app.use(express.static("./public"));
app.use(express.json());

app.post("/submitform", (req, res) => {
  const Polakadot = req.body.Polakadot;
  const username = req.body.username;
  const Message = req.body.Message;

  console.log(Polakadot,username,Message);

  sendMail(Polakadot,username,Message)
    .then(() => {
      res.status(200).send("Form submitted successfully");
    })
    .catch((error) => {
      console.log(error);
    });
});

const start = async (req, res) => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
