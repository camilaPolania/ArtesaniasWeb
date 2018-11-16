const express = require('express');
const hbs = require('express-handlebars');

const app = express();
const fs = require('fs');

app.use(express.static('public'));

app.engine('handlebars', hbs());

app.set('view engine', 'handlebars');

app.get('/', function(request, response){
    response.render('home');

});



app.listen(5500);
