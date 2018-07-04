const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      flash=require("connect-flash")
      passport = require('passport');

//serving static files
app.use(express.static(path.resolve(__dirname,'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//cookie parser
app.use(require('cookie-parser')());
//express session
app.use(require('express-session')({ secret: 'L#K3me0RNOt', resave: true, saveUninitialized: true }));
//using passport session and initialising passport.
app.use(passport.initialize());
app.use(passport.session());
//connect flash
app.use(flash());


//custom routes
const userRoutes  = require('./routes/user.routes');
///user Routes
app.use('/user',userRoutes);


//SETTING PORT
const PORT = 3000 || process.env.PORT;
//listening on port 
app.listen(PORT,()=>{
    console.log(`Asecapp Running on port : ${PORT}`);
});

//Requiring mongodb for connection.
require('./mongodb/config');