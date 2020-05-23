const nodemailer = require("nodemailer");

module.exports = function (req, res, next) {
  const { name, subject, query, email } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "youremail@address.com",
      pass: "yourpassword",
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
    from: email, // sender address
    to: "koiralaprayatna9@gmail.com", // list of receivers
    subject: subject, // Subject line
    html: message, // plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      res.status(500).send({
        message:
          "Sorry, we couldn't process your request right now. Try again in a little bit!",
      });
    else next();
  });
};
