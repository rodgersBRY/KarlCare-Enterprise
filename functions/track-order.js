const transporter = require("./transporter");
require("dotenv").config();

exports.handler = (event, body, cb) => {
  var body = JSON.parse(event.body);

  const mail = {
    from: process.env.EMAIL,
    to: body.email,
    subject: "Email Confirmation from Unilink Nexus International",
    html: `<h3>Hi ${body.name},</h3>
    <p>
      Thank you for expressing interest with us at Unilink Nexus! <br />
      We wanted to let you know we received your application to study abroad,
      and we are delighted to be helping you with this process. <br />

      Our team will review your application and will be in touch.
      <br /><br />
      Best Regards, <br />
      <strong>Unilink Nexus International</strong> 
    </p>`,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      cb(err, {
        statusCode: 400,
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
