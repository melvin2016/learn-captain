//User model
const UserModel = require('../mongodb/models/userReg.db');

// /user/register controller
const register = (req,res)=>{
    const body = req.body;
    const User = new UserModel(body);
    User.save((err,data)=>{
        if(err){
            throw new Error({"Error On saving ": err});
        }else{
            console.log(data);
            res.send(data);
        }
    });
};
// /user/login controller
const login = (req,res)=>{
    res.send("authenticated.");
}
//exporting
module.exports = {
    register : register,
    login:login
}