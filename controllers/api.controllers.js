const upload = (req,res)=>{
    if(req && req.err){
        res.status(400).send({err:req.err});
        return;
    }

    console.log(req.file);
    res.send("Uploaded Successfully!");
}

module.exports={
    upload:upload
}