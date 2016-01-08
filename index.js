var express = require('express');
var path =require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var favicon = require('serve-favicon')

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/',routes);
app.use('/users',users);

app.listen(3000,function(){
    console.log("port 3000")
})
