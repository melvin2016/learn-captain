//requiring UserUploadModel for storing filename associated with each user
const UserUploadModel = require('../mongodb/models/userUpload.db');
const upload = (req,res)=>{
    if(req && req.err){
        res.status(400).send({err:req.err});
        return;
    }
    const Upload = new UserUploadModel({
        userid:req.jwt.userid,
        created:Date.now(),
        filename:req.file.filename,
        originalName:req.file.originalname
    });
    Upload.save((err,data)=>{
        if(err) throw new Error(err);
        res.send({
            message:"Uploaded Successfully!",
            data:{
                userid:data.userid,
                filename:data.originalName,
                created:data.created
            }
        });
    });
}

module.exports={
    upload:upload
}