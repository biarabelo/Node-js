var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'brabelomaciel@gmail.com',
    pass: 'ewhqduxsdswqhiwv'
  }
});

var mailOptions = {
  from: 'brabelomaciel@gmail.com',
  to: 'jojominiqueridx@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Git summer'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});