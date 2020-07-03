const path = require('path');
const cors = require('cors');

const ourServicesController = require('../controllers/ourServicesController');
const aboutUsController = require('../controllers/aboutUsController');
const navbarController = require('../controllers/navbarController');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/our-services', ourServicesController.getOurServices);
  app.get('/api/about-us', aboutUsController.getAboutUs);
  app.get('/api/navbar', navbarController.getNavbar);

};