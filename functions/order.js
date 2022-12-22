const transporter = require("./transporter");

exports.handler = (event, context, cb) => {
  var body = JSON.parse(event.body);

  const mail = {
    from: body.email,
    to: process.env.EMAIL,
    subject: "Study Abroad Program Application",
    html: `<h1>${body.name} Application Details</h1>
    <ul style="list-style: none;">
      <li>Email: ${body.email}</li>
      <li>Tel: ${body.phone}</li>
      <li>Nationality: ${body.nationality}</li>
      <li>Country of Origin: ${body.originCountry}</li>
      <li>Academic Level: ${body.academicLevel}</li>
      <li>Last Institution: ${body.lastInstitution}</li>
      <li>Next Level of Education: ${body.nextLevel}</li>
      <li>Preferred Course to Study: ${body.preferredCourse}</li>
      <li>Preferred Destination: ${body.preferredDestination}</li>
      <li>Additional information: ${body.additional_info}</li>
    </ul>`,
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
