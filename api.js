//------------------ Initialization of parameters-------------------------------------------
var request = require('supertest');
const express     = require("express");
const app         = express();
const mongoose    = require("mongoose");
const apiuser = require("./apiusers");

//---------------------- Mongo DB connection settings--------------------------------------
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { SSL_OP_TLS_BLOCK_PADDING_BUG } = require("constants");

// Connection URL
const url = ' mongodb+srv://yelpbdd:yelpadd@cluster0.4qboj.mongodb.net/myproject?retryWrites=true&w=majority';
// Database Name
const dbName = 'myproject';

mongoose.connect(' mongodb+srv://yelpbdd:yelpbdd@cluster0.4qboj.mongodb.net/myproject?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// -----------------------Create Routes-----------------------

//Respond with "hello world" for requests that hit our root "/"
app.get('/login', function (req, res) {
    res.send('Welcome to Login Page,we are on AWS Facebook, we are working on CI CD CT AWESOME REALLY' );
   });

// -----------------Serializaed Testing----------------------
app.post('/posts/seri',async function(req,res){
  try {
    
    const seri = new apiuser({
    
      name:req.body.name,
      language:req.body.language,
      location:req.body.location,
      laptop:req.body.laptop
      
  });
  seri.save()
  .then(data=> {
    return res.json(data);
  })

  } catch (error) {
    res.json({message:error})
  }

});
 
   
// -----------------Initializing the server port at at 8080----------------------

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Server listening on port 8000 for AWS DevOps CI/CD integration testing.. . !');
});