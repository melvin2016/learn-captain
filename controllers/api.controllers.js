const upload = (req,res)=>{
    console.log(req.err);
    if(req && req.err){
        res.status(400).send({err:req.err});
        return;
    }
    res.send("upload handler working");
}

module.exports={
    upload:upload
}