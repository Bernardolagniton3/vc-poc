const twofactor = require("node-2fa");
var newSecret = ""

async function otp(req,res,next){
    newSecret = await twofactor.generateSecret({ username: req.body.username, password: req.body.password });
    const newToken = await twofactor.generateToken(newSecret.secret);
    res.json(newToken.token);
}

async function verify(req,res,next){
    const verification = await twofactor.verifyToken(newSecret.secret, req.body.otp, 5);
    if (verification == null || verification.delta === !0)
    {
        res.json("Invalid Otp"); 
        res.status(400);
    }
    else{
        res.json("successful"); 
        res.status(200);
    }
}

module.exports = { otp ,verify }