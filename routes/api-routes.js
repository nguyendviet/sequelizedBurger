var db = require('../models');

module.exports = (app)=>{

  app.get("/api/burgers", (req, res)=>{
    db.Burger.findAll({}).then((result)=>{
      res.json(result);
    });
  });
};