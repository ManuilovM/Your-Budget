const jwt = require('jsonwebtoken');
const ts =require('../config/tokenSecrets');

module.exports = function(req, res, next){
    if (!req.body.accessToken)   {res.json({success: false, msg: "Нет токена"}); res.end()}
    else {
        try{
            jwt.verify(req.body.accessToken, ts.access, function(err, decode){
                if(err) throw err;
                res.locals.id = decode.id; //  не факт что этот id есть в базе
                next();
           })
        }catch(e){
            res.json({success: false, msg: e.message})
        }
    }


}