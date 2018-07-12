const mongoose = require('mongoose');
//Connecting Mongodb
mongoose.connect('mongodb://melvin2016:sachu1234@ds235711.mlab.com:35711/asecapp')
    .then((db)=>{
        console.log("Mongodb Connected .");
    })
    .catch((err)=>{
        console.log(err);
    });