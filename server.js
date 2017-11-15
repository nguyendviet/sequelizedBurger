var express = require('express');
var bParse = require('body-parser');
var app = express();
var port = process.env.port || 3000;
var db = require('./models');
var eHandle = require('express-handlebars');

// use express to parse data
app.use(bParse.json());
app.use(bParse.urlencoded({extended: true}));
app.use(bParse.text());
app.use(bParse.json({type: 'application/vnd.api+json'}));
app.use(express.static('public'));

// Set Handlebars as the default templating engine
app.engine('handlebars', eHandle({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./routes/api-routes.js')(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(port, function() {
    console.log('App listening on port ' + port);
  });
});