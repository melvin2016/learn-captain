const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      flash=require("connect-flash")
      passport = require('passport'),
      cors = require('cors');
//using cors for all reqs
app.use(cors());
//serving static files
app.use(express.static(path.resolve(__dirname,'public/asecapp/build')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//using passport session and initialising passport.
app.use(passport.initialize());
//connect flash
app.use(flash());
//Serialising User Into Session.
passport.serializeUser(function(user,done){
    done(null,user);
});
//Deserialising User From Session.
passport.deserializeUser(function(user,done){
    done(null,user);
});


//custom routes
const userRoutes  = require('./routes/user.routes');
///user Routes
app.use('/user',userRoutes);


//SETTING PORT
const PORT = 5000 || process.env.PORT;
//listening on port 
app.listen(PORT,()=>{
    console.log(`Asecapp Running on port : ${PORT}`);
});

//Requiring mongodb for connection.
require('./mongodb/config');