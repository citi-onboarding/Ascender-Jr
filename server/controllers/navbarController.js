const keystone = require('keystone');

const navbar = keystone.list('navbar');

module.exports = {
  getNavbar(req, res) {
    navbar.model.find((err, items) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } 

     res.status(200).json(items)
    });
  }
}