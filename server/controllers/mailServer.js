const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

module.exports = async ({
  destinationUser,
  subjectText,
  htmlOption,
  textOption,
}) => {
  const tranporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ascenderjradm@gmail.com',
      pass: 'Ajr2020energia',
    },
  });

  await tranporter.sendMail({
    from: 'ascenderjradm@gmail.com',
    to: destinationUser,
    subject: subjectText,
    html: htmlOption,
    text: textOption,
  });
};