const express = require('express');
const Router = express.Router();
const path = require('path');
//using multer for handling form uploads
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now()+'.pdf');
    }
});
const upload = multer({
    dest:'upload/',
    fileFilter:(req,file,cb)=>{
        const ext = path.extname(file.originalname);
        if(file.mimetype !== 'application/pdf' && ext !== '.pdf'){
            req.err="Only Pdf Allowed!";
            cb("Only Pdf Allowed!", false);
        }
        cb(null,true);
    },
    storage:storage
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