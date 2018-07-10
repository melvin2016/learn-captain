const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
//Defining Schema
const UserUploadSchema = new Schema({
    userid : String,
    created : Date,
    filename : String,
    originalName:String
});


//Making Model with defined schema
const UserUploadModel = mongoose.model('UserUpload',UserUploadSchema);


//exporting model.
module.exports = UserUploadModel;