const jwt = require('jsonwebtoken');
const ts =require('../config/tokenSecrets');

module.exports = function(req, res, next){
    console.log("identify");
    if (!req.body.accessToken)   res.json({success: false, msg: "Нет токена"});
    try{
        jwt.verify(req.body.accessToken, ts.access, function(err, decode){
            if(err) throw err;
            console.log("identify: " + decode.id)
            res.locals.id = decode.id; //  не факт что этот id есть в базе
            console.log("identify: " + res.locals.id);
            next();
       })
    }catch(e){
        res.json({success: false, msg: e.message})
    }

}