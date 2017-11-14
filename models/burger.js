var orm = require('../config/orm.js');

var burger = {
    all: (call)=>{
        orm.all('burgers', (res)=>{
            call(res);
        });
    },
    insert: (val, call) => {
        orm.insert('burgers', 'burger_name', val, (res)=>{
            call(res);
        });
    },
    update: (val, call)=>{
        orm.update('burgers', 'devoured', 1, 'id', val, (res)=>{
            call(res);
        });
    }
};

module.exports = burger;