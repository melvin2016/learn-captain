//requiring passport , passport local for strategies
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

//User model
const UserModel = require('../mongodb/models/userReg.db');

//Defining Passport Strategy
passport.use(new LocalStrategy({usernameField:"userid", passwordField:"password"},
(username, password, done) =>{
    UserModel.findOne({ userid: username }, (err, user)=> {
    if (err) { return done(err); }
    if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
    }
    if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
    });
}
));
//Serialising User Into Session.
passport.serializeUser(function(user,done){
    done(null,user);
});
//Deserialising User From Session.
passport.deserializeUser(function(user,done){
    done(null,user);
});

//exporting
module.exports = passport;