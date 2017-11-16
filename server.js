const express = require('express');
const bParse = require('body-parser');
const eHandle = require('express-handlebars');
// use models to sync data
const db = require('./models');
// set up express
const app = express();
const port = process.env.port || 3000;

// use express to parse data
app.use(bParse.json());
app.use(bParse.urlencoded({extended: true}));
app.use(bParse.text());
app.use(bParse.json({type: 'application/vnd.api+json'}));
// static directory
app.use(express.static('public'));

// Set Handlebars as the default templating engine
app.engine('handlebars', eHandle({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./routes/api-routes.js')(app);
require("./routes/html-routes.js")(app);

// sync sequelize models
db.sequelize.sync({force: true}).then(()=>{
  db.Burger.bulkCreate([
    {burger_name: 'Crispy Quinoa Burger'},
    {burger_name: 'BBQ Tofu Burger'},
    {burger_name: 'Beet Burger'}
  ]);

  app.listen(port, ()=>{
    console.log('App listening on port ' + port);
  });
});