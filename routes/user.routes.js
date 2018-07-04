const express = require('express'),
      Router = express.Router(),
      passport = require('../passport/config');
      
//Requiring controllers
const userControllers = require('../controllers/user.controllers');

//initialising routes for register
Router
    .route('/register')
    .post(userControllers.register);
//initialising routes for login
Router
    .use(passport.authenticate('local'))
    .post('/login',userControllers.login);

//exporting module
module.exports = Router;
