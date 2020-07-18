const dotenv = require('dotenv');
const mailServer = require('../services/mailServer');

const sendMail = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    const body = `
      Nome: ${name}
      Email: ${email}
      Mensagem: ${message}`;
      
    await mailServer({
      destinationUser: process.env.CLIENT_EMAIL,
      subjectText: subject,
      textOption: body,
    });

    res.status(200).send('');
  } catch (error) {
    res.status(500).send('Ops, something is wrong...');
    console.log(error);
  }
};

module.exports = sendMail;