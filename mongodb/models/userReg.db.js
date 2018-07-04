const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
//Defining Schema
const UserRegSchema = new Schema({
    userid : String,
    password : String,
    email : String,
    regno : String,
    num : Number,
    joinedOn : Date
});


//Making Model with defined schema
const UserModel = mongoose.model('UserReg',UserRegSchema);


//exporting model.
module.exports = UserModel;