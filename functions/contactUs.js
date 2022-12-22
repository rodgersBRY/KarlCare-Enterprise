const transporter = require("./transporter");

require("dotenv").config();

exports.handler = (event, context, cb) => {
  var body = JSON.parse(event.body);

  const mail = {
    from: body.email,
    to: process.env.EMAIL,
    subject: "User Feedback",
    html: `<h3>${body.name}</h3>
    <em>${body.email}</em>
    <p>${body.phone}</p>
    <p>
      ${body.message}
    </p>`,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      cb(err, {
        statusCode: 500,
        body: err.message,
      });
    } else {
      cb(null, {
        statusCode: 200,
        body: "success",
      });
    }
  });
};
