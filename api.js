//------------------ Initialization of parameters-------------------------------------------
const express     = require("express");
const app         = express();

// -----------------------Create Routes-----------------------

//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
    res.send('Welcome Vipin on DevOps !');
   });

// -----------------Initializing the server port at 3000----------------------
app.listen(3000, function() { 
  console.log('Server listening on port 3000 for AWS DevOps CI/CD integration testing...'); 
});
