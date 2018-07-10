const jwt = require('jsonwebtoken');
//verify module
const verify = (req,res,next)=>{
    const secret = 'Y0lO30L0Blaf'; //secret for verifying jwt
    const token = req.headers.jwt;
    jwt.verify(token,secret,(err,dec)=>{
        if(err){
            
            res.status(401).send({
                err:"Authorisation Failed !"
            });
            return;
        }
        req.jwt=dec;
        next();
    });
}
//exporting
module.exports={
    verify:verify
}