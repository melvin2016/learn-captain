//required modules
const bcrypt = require('bcrypt');
//User model
const UserModel = require('../mongodb/models/userReg.db');

// /user/register controller
const register = (req,res)=>{
    const saltRounds = 10;
    //getting body from req.body
    const body = req.body;
    console.log(body.password);
    //hashing using bcrypt node modules
    bcrypt.genSalt(saltRounds,(err,salt)=>{
        if(err) throw {"message ":"error in generating salt"};
        bcrypt.hash(body.password,salt).then((hash)=>{
            //making user model instance
            const User = new UserModel({
                userid : body.userid,
                //using hashed passwords
                password : hash,
                email:body.email,
                num:body.num,
                regno:body.regno,
                joinedOn:body.joinedOn
            });
            //saving user to mongodb
            User.save((err,data)=>{
                if(err){
                    throw new Error({"Error On saving ": err});
                }else{
                    console.log(data);
                    res.send(data);
                }
            });
        //cathing error from promises if any.
        }).catch((err)=>{
            if(err) throw {"message ":"error in hashing"};
        })

    });
    
};
// /user/login controller
const login = (req,res)=>{
    
    res.send(`authenticated. ${req.flash('message')}` );
}
//exporting
module.exports = {
    register : register,
    login:login
}