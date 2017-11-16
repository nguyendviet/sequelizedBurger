const db = require('../models');

module.exports = (app)=>{

  app.get('/api/burgers', (req, res)=>{
    db.Burger.findAll({}).then((result)=>{
      res.json(result);
    });
  });

  app.put('/api/burgers/:id', (req, res)=>{
    db.Burger.update(
      {
        devoured: true
      },
      {
        where: {
          id: req.params.id
        }
      })
    .then((result)=>{
      res.json(result);
    });
  });
};