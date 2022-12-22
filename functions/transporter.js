const nodemailer = require("nodemailer");

require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

transporter.verify((err, _) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is ready");
  }
});

module.exports = transporter;
