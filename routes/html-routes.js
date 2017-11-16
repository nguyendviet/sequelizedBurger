const db = require('../models');

module.exports = (app)=>{
    app.get('/', (req, res)=>{
        db.Burger.findAll({}).then((data)=>{
            var bugerObj = {
                burgers: data
            };
            res.render('index', bugerObj);
        });
    });
};