const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

};