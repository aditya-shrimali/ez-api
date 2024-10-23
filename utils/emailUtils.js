const nodemailer = require("nodemailer");

const sendAlertEmail = async (subject, message) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: "recipient@example.com",
    subject: subject,
    text: message,
  });
};

module.exports = { sendAlertEmail };
