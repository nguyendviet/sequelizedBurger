const db = require('../models');

module.exports = (app)=>{

  // show all burgers
  app.get('/api/burgers', (req, res)=>{
    db.Burger.findAll({}).then((result)=>{
      res.json(result);
    });
  });

  // show all customers
  app.get('/api/customers', (req, res)=>{
    db.Customer.findAll({}).then((result)=>{
      res.json(result);
    });
  });

  // update devoured burger
  app.put('/api/burgers/:id', (req, res)=>{

    console.log('\ncustomer name: ' + req.body.name);

    db.Burger.update(
      {
        devoured: true
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then((result)=>{
      res.json(result);
    });
  });

  // add new burger
  app.post('/api/burgers', (req, res)=>{
    db.Burger.create({
      burger_name: req.body.name
    }).then((result)=>{
      res.json(result);
    });
  });

  // add new customer
  app.post('/api/customers', (req, res)=>{
    db.Customer.create({
      customer_name: req.body.name
    }).then((result)=>{
      res.json(result);
    });
  });

  // remove customer
  app.delete("/api/customers/:id", (req, res)=>{
    db.Customer.destroy({
      where: {
        id: req.params.id
      }
    }).then((result)=>{
      res.json(result);
    });
  });
};