var express = require('express');
var app = express();
var bParse = require('body-parser');
app.use(bParse.urlencoded({extended: true}));
app.use(bParse.json());
app.use(express.static('public')); // serve static content from folder public

var port = process.env.PORT || 3306;

var eHandle = require('express-handlebars');
// Set Handlebars as the default templating engine
app.engine('handlebars', eHandle({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(port, ()=>{
    console.log('Listening on port: ' + port);
})