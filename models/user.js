const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const randomString = require('../config/makeRandomString');
const jwt = require("jsonwebtoken");
const ts = require("../config/tokenSecrets");
const nodemailer = require ('nodemailer');


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true  // самостоятельно
    },
    password: {
        type: String,
        required: true,
    },
    sessions: {
        type: Map
    }
})

const User = module.exports = mongoose.model('User', UserSchema);

/* module.exports.getUserByLogin = function(login, callback){
    const query = {
        login: login,
    };
    User.findOne(query, callback);
};

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}; */

module.exports.registerUser = function (newUser, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            if (err) {
                console.log(err);
                callback(err);
            }
            else {
                newUser.password = hash;
                User.create(newUser, callback);
            }
        });
    });
};

module.exports.loginUser = function (req, res, next) {
    try {
        let login = req.body;
        User.findOne({ email: login.email }, function (err, user) {
            if (err) console.log(err)
            else if (user) {
                if (bcrypt.compareSync(login.password, user.password)) {


                    let useragent = req.get("User-Agent").replace(/\./gi, "-");
                    let value = randomString(20);
                    let sessionsBD;
                    let session;

                    if (user.sessions) {
                        sessionsBD = user.sessions;
                        session = new Map;
                    } else {
                        sessionsBD = session = new Map;
                    }
                    session.set(useragent,value );
                    sessionsBD.set(useragent, value );
                    session = Array.from(session);
                    session = JSON.stringify(session);
                   

                    let accessToken = jwt.sign({ id: user._id }, ts.access, { expiresIn: 60*60 });
                    let refreshToken = jwt.sign({ stringForRefreshToken: session }, ts.refresh, { expiresIn: 60 * 60*(24*14+12)});
                    User.updateOne({ email: login.email }, { sessions: sessionsBD }, function (err, result) {

                        if (err) console.log(err);
                        else res.json({ success: true, msg: "Вход выполнен", userName: user.name, accessToken: accessToken, refreshToken: refreshToken });
                    });

                } else res.json({ success: false, msg: "Не верный пароль" })

            } else res.json({ success: false, msg: "Не верный email" })

        })

    } catch {
        res.json({ success: false, msg: "Не верный запрос" })
    }
}

module.exports.logOut = function (req, userid, callback) {
try{
    User.findById(userid, function(err, user){
        let sessionsBD = user.sessions;
        let useragent = req.get("User-Agent").replace(/\./gi, "-");
        sessionsBD.set(useragent, "");
        User.updateOne({ _id: userid }, { sessions: sessionsBD}, callback)
    })

}catch(e) {
    console.log(e);
}

    
}

module.exports.refreshTokens = function (req, res) {
    try {
        let tokens = req.body;
        if (!tokens.accessToken || !tokens.refreshToken) res.json({ success: false, msg: "Нет токена" });

        let userid = jwt.decode(tokens.accessToken).id;

        User.findById(userid, function (err, user) {
            if (!user || err) res.json({ success: false, msg: "Пользователь не найден" });
            else {
                try {
                    jwt.verify(tokens.accessToken, ts.access);
                    User.logOut(req, userid, function () {
                        res.json({ success: false, msg: "Аксесс токен не просрочен" });
                    })
                } catch (e) {
                    if (e.message == "jwt expired") {
                        try {
                            jwt.verify(tokens.refreshToken, ts.refresh, function (err, decode) {
                                if (err) throw err;
                                else {
                                    let s = JSON.parse(decode.stringForRefreshToken);
                                    s = new Map(s);
                                    let useragent = req.get("User-Agent").replace(/\./gi, "-");
                                    if (!!s.get(useragent) && s.get(useragent) == user.sessions.get(useragent)) {
                                        let value = randomString(20);
                                        let sessionsBD = user.sessions;
                                        sessionsBD.set(useragent, value);
                                        let session = new Map;
                                        session.set(useragent, value);
                                        session = Array.from(session);
                                        session = JSON.stringify(session);
                                        let accessToken = jwt.sign({ id: user._id }, ts.access, { expiresIn: 60*60 });
                                        let refreshToken = jwt.sign({ stringForRefreshToken: session }, ts.refresh, { expiresIn: 60 * 60*(24*14+12) });
                                        User.updateOne({ email: user.email }, { sessions: sessionsBD }, function (err, result) {

                                            if (err) console.log(err);
                                            else res.json({ success: true, msg: "Токены заменены", userName: user.name, accessToken: accessToken, refreshToken: refreshToken });
                                        });
                                    } else res.json({ success: false, msg: "Не валидный refreshToken" })
                                }
                            })
                        } catch (e) {
                            console.log(e);
                            res.json({ success: false, msg: e.message })
                        }
                    } else {
                        console.log(e);
                        res.json({ success: false, msg: e.message })
                    }
                }

            }
        })

    } catch (e) {
        console.log(e);
        res.json({ success: false, msg: "Не верный запрос" });
    }
    
}

module.exports.forgotPass= function(req, res){
    let email = req.body.email;
    User.findOne({email:email}, function(err, user){
        if(err) console.log(err)
        else{
            if(user){
                let getString;

            }else res.json({success:false, msg: "No user"});
        }
    })
    
}