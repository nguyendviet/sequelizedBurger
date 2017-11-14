var connection = require('../config/connection.js');

var orm = {

    //select all
    all: (table, call)=>{
        var queryStr = 'SELECT * FROM ' + table;

        connection.query(queryStr, (err, res)=>{
            if (err) throw err;
            call(res);
        })
    },

    // insert one
    insert: (table, col, val, call)=>{
        var queryStr = 'INSERT INTO ?? (??)';
        queryStr += ' VALUES (?)';

        connection.query(queryStr, [table, col, val], (err, res)=>{
            if (err) throw err;
            call(res);
        })
    },

    // update one
    update: (table, col1, val1, col2, val2, call)=>{
        var queryStr = 'UPDATE ?? SET ?? = ' + val1; 
        queryStr+= ' WHERE ?? = ' + val2;

        connection.query(queryStr, [table, col1, col2], (err, res)=>{
            if (err) throw err;
            call(res);
        });
    }
};

module.exports = orm;