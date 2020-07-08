const keystone = require('keystone');

const clientsAndPartners = keystone.list('ClientsAndPartners');

module.exports = {

  getClientsAndPartners (req, res) {
    clientsAndPartners.model.find((err, items) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } 

     res.status(200).json(items)
    });
  }

} 