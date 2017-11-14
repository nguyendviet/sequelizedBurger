var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', (req, res)=>{
    burger.all((data)=>{
        var bugerObj = {
            burgers: data
        };

        console.log(bugerObj);
        res.render('index', bugerObj);
    });
});

router.post('/api/burgers', (req, res)=>{
    burger.insert(req.body.name, (result)=>{
        // send back the id of the new burger
        res.json({id: result.insertId});
    });
});

router.put('/api/burgers/:id', (req, res)=>{
    var condition = req.params.id;

    burger.update(condition, (result)=>{

        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

module.exports = router;
