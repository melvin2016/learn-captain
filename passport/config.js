//requiring passport , passport local for strategies
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy,
  //requiring bcrypt module
  bcrypt = require('bcrypt');

//User model
const UserModel = require('../mongodb/models/userReg.db');

//Defining Passport Strategy
passport.use(new LocalStrategy({usernameField:"userid", passwordField:"password"},
(username, password, done) =>{
    console.log(username,password);
    //fing user from mongodb 
    UserModel.findOne({ userid: username }, (err, user)=> {
    if (err) { return done(err); }
    if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
    }
    if (user.password ) {
        bcrypt.compare(password,user.password)
            .then((res)=>{
                //if res == true then password verified else not
                if(res){
                    return done(null,user,{message:"Password Verified",userid:user.userid});
                }else{
                    return done(null,false,{message:"Incorrect Password",bool:res});
                }
                
            })
            //catching errors in comparing passwords
            .catch((err)=>{
                return done(null, false, { message: 'Error in comparing'});
            });
    }
    });
}
));

//exporting
module.exports = passport;