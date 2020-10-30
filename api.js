//------------------ Initialization of parameters-------------------------------------------
var request = require('supertest');
const express     = require("express");
const app         = express();

// -----------------------Create Routes-----------------------

//Respond with "hello world" for requests that hit our root "/"
app.get('/login', function (req, res) {
    res.send('Application is running on new AWS instance Successfuly..' );
   });

    // GET the course details
  app.get('/posts',async (req,res)=>
  {
        //const getcourses =  await apiuser.findById(req.params.courseid);
       // return res.json(getcourses);
        res.send('Post Request' );
  })
 

// -----------------Initializing the server port at 3000----------------------

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server listening on port 3002 for AWS DevOps CI/CD integration testing... !');
});