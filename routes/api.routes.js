const express = require('express');
const Router = express.Router();
//using multer for handling form uploads
const multer = require('multer');
const upload = multer({
    dest:'upload/',
    fileFilter:(req,file,cb)=>{
        if(file.mimetype !== 'application/pdf'){
            req.err="Only Pdf Allowed!";
            cb("Only Pdf Allowed!", false);
        }
        cb(null,true);
    }
});
//requiring jwt for verification on protected endpoints
const jwt = require('../jwt/jwt');
//requiring api controllers
const apiControllers = require('../controllers/api.controllers');
//route for ==> /api/upload
Router
    .use(jwt.verify)
    .use(upload.single('pdfFile'))
    .post('/upload',apiControllers.upload);

//exporting module
module.exports=Router;