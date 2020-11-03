//------------------ Initialization of parameters-------------------------------------------
var request = require('supertest');
const express     = require("express");
const app         = express();

// -----------------------Create Routes-----------------------

//Respond with "hello world" for requests that hit our root "/"
app.get('/login', function (req, res) {
    res.send('Welcome to Login Page,we are on AWS Facebook, we are working on CI CD CT' );
   });

   app.get('/aboutyou', function (req, res) {
    res.send('Welcome to About You Page, we are on AWS Instagram' );
   });

   
// -----------------Initializing the server port at 3000----------------------

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Server listening on port 8000 for AWS DevOps CI/CD integration testing... !');
});