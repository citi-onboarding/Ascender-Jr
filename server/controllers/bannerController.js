const keystone = require('keystone');

const banner = keystone.list('Banner');

module.exports = {

  getBanner (req, res) {
    banner.model.find((err, items) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } 

     res.status(200).json(items)
    });
  }

} 