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

    app.get('/customers', (req, res)=>{
        db.Customer.findAll({}).then((data)=>{
            var customerObj = {
                customers: data
            };
            res.render('customer', customerObj);
        });
    });
};