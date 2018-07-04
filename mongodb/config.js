const mongoose = require('mongoose');
//Connecting Mongodb
mongoose.connect('mongodb://localhost/asecapp')
    .then((db)=>{
        console.log("Mongodb Connected .");
    })
    .catch((err)=>{
        console.log(err);
    });