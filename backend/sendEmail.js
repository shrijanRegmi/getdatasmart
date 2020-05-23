const nodemailer = require("nodemailer");
// sends mail from account to itself. contains the form data in the mail message
module.exports = function (req, res, next) {
  const ownMail = "youremailtoreceive@email.com";
  const pwd = "your_pa$$word";
  const host = "smtp_host";
  const { name, subject, query, email } = req.body;
  const transporter = nodemailer.createTransport({
    host: host,
    port: 465,
    secure: true,
    auth: {
      user: ownMail,
      pass: pwd,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });
  const message = `<html>
  <body>
    <h2>Name: ${name}</h2>
    <h3> Subject: ${subject}</h3>
    <h3>Email: <a>${email}</a></h3>
       <br></br>
    
<p>${query}</p>
</body>
</html>
  `;
  const mailOptions = {
    from: ownMail, // sender address
    to: ownMail, // list of receivers
    subject: subject, // Subject line
    html: message, // plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          "Sorry, we couldn't process your request right now. Try again in a little bit!",
      });
    } else next();
  });
};
