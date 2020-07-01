const keystone = require('keystone');

const ourServices = keystone.list('NossosServiços');

module.exports = {

  getOurServices(req, res) {
    ourServices.model.find((err, items) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } 

     res.status(200).json(items)
    });
  }

}