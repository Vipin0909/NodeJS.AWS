// DB for API Testing
var mongoose = require("mongoose");

var APISchema = new mongoose.Schema({
    
    courses:
    {
        mobile: [{
            _id:false,
            mobilename: String,
            price:  Number 
            
          }],
        webautomation: [ {
            _id:false,
            coursename: String,
            price:  Number 
        }],
        api: {
            _id:false,
            coursename: String,
            price:  Number 
          }
    },// end of course    
    
          url: {
            type:String,
            require:true
        },
        services: {
            type:String,
            require:true
        },
        experties: {
            type:String,
            require:true
        },
        instructor:{
            type:String,
            require:true
        },
        linkedin:{
            type:String,
            require:true
        },
    
       status:{
         type:String,
         require:true
        },
        username:{
        type:String,
        require:true
        },
        password:{
        type:String,
        require:true
        },
        email:{
        type:String,
        require:true
        },

        name:{
        type:String,
        require:true
        },
        language:{
        type:String,
        require:true
        },
        location:{
        _id:false,
        state:String,
        city:String
        },
        laptop: [ {
            _id:false,
            laptopname: String,
            price:  Number 
        }],
     

    
});

//UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("apiuser",APISchema)