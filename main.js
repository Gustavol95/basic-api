var express = require('express');
var app = express();
var myRoutes = require('./routes/routes.js');
var authRoutes = require('./routes/auth.js');
var bodyParser = require("body-parser");
var jwt=require('jsonwebtoken');
var expressJwt=require('express-jwt');


var jwtClave="thisIsTheSalt";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', myRoutes);
app.use('/auth', authRoutes);

//app.use(expressJwt({secret:jwtClave}).unless({path: ["/login"] }));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
