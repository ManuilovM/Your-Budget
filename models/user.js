const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const randomString = require('../config/makeRandomString');
const jwt = require("jsonwebtoken");
const ts = require("../config/tokenSecrets");
const nodemailer = require('nodemailer');
const mail = require("../config/mail");
const host = require("../config/host");




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
    },
    tempPass: {
        type: String
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
                    session.set(useragent, value);
                    sessionsBD.set(useragent, value);
                    session = Array.from(session);
                    session = JSON.stringify(session);


                    let accessToken = jwt.sign({ id: user._id }, ts.access, { expiresIn: 60 * 60 });
                    let refreshToken = jwt.sign({ stringForRefreshToken: session }, ts.refresh, { expiresIn: 60 * 60 * (24 * 14 + 12) });
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
    try {
        User.findById(userid, function (err, user) {
            let sessionsBD = user.sessions;
            let useragent = req.get("User-Agent").replace(/\./gi, "-");
            sessionsBD.set(useragent, "");
            User.updateOne({ _id: userid }, { sessions: sessionsBD }, callback)
        })

    } catch (e) {
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
                                        let accessToken = jwt.sign({ id: user._id }, ts.access, { expiresIn: 60 * 60 });
                                        let refreshToken = jwt.sign({ stringForRefreshToken: session }, ts.refresh, { expiresIn: 60 * 60 * (24 * 14 + 12) });
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


const transporter = nodemailer.createTransport({
    service: "yandex",
    secure: false,
    auth: {
        user: mail.user,
        pass: mail.pass
    },
    tls: {
        rejectUnauthorized: false
    }
});
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

module.exports.forgetPass = function (req, res) {
    console.log("forgetPass")
    console.log("forgetPass, email: " + req.body.email);
    let email = req.body.email;
    User.findOne({ email: email }, function (err, user) {
        if (err) console.log(err)
        else {
            if (user) {
                let accessToken = jwt.sign({ accessToken: user._id }, ts.access, { expiresIn: 60*3 });//
                let src = host.ang + "/forgetPass" + "?id=" + accessToken;

                let mailOptions = {
                    from: mail.user,
                    to: user.email,
                    subject: 'Вход в аккаунт ' + user.name + " ТВОЙ БЮДЖЕТ",
                    html: `<h1>${user.name}!</h1><p>Поступил запрос о смене пароля Вашего аккаунта. Если это были не вы - проигнорируйте или удалите это сообщение.</p> <p>Если запрос был отправлен Вами перейдите по следующей ссылке</p><p><a href="${src}" target="_blank">${src}</a></p>`
                }

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log("Ошибка при отправке");
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                        res.json({ success: true, msg: "Письмо отправлено" });
                    }
                });


            } else res.json({ success: false, msg: "No user" });
        }
    })
}

module.exports.getForgetPass = function (req, res) {
    let token = req.body.accessToken;

    try {
        jwt.verify(token, ts.access, function (err, decode) {
            if (err) throw err
            else {
                User.findById(decode.accessToken, function (err, user) {
                    if (err) console.log(err);
                    else {
                        // login//
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
                        session.set(useragent, value);
                        sessionsBD.set(useragent, value);
                        session = Array.from(session);
                        session = JSON.stringify(session);


                        let accessToken = jwt.sign({ id: user._id }, ts.access, { expiresIn: 60 * 60 });
                        let refreshToken = jwt.sign({ stringForRefreshToken: session }, ts.refresh, { expiresIn: 60 * 60 * (24 * 14 + 12) });
                        // Add tempPass
                        let tempPass = randomString(20);
                        let tempPassToken = jwt.sign({ tempPass: tempPass }, ts.tempPass, { expiresIn: 60*15});
                        User.updateOne({ email: user.email }, { sessions: sessionsBD, tempPass: tempPass }, function (err, result) {

                            if (err) console.log(err);
                            else res.json({ success: true, msg: "Вход выполнен", userName: user.name, accessToken: accessToken, refreshToken: refreshToken, tempPassToken: tempPassToken });
                        });

                    }
                })


            }
        })
    } catch (e) {
        console.log(e);
        res.json({ success: false, msg: e.message });
    }

}

module.exports.changePass = function (req, res) {
    let body = req.body;
    try {
        if (body.tempPass) {
            jwt.verify(body.tempPass, ts.tempPass, function (err, decode) {
                if (err) {
                    res.json({ success: false, msg: err.message });
                    console.log(err);
                } else {
                    User.findById(jwt.decode(body.id).id, function (err, user) {
                        if (err) console.log(err);
                        else {
                            if (!user) {
                                res.json({ success: false, msg: "Пользователь не найден" })
                            } else {
                                if (decode.tempPass == user.tempPass) {
                                    bcrypt.genSalt(10, function (err, salt) {

                                        bcrypt.hash(body.newPass, salt, function (err, hash) {
                                            if (err) {
                                                console.log(err);
                                            }
                                            else {
                                                User.updateOne({ _id: user._id }, { tempPass: "", password: hash }, function (err, result) {
                                                    if (err) console.log(err);
                                                    else {
                                                        res.json({ success: true, msg: "Пароль успешно заменен" })
                                                    }
                                                })
                                            }
                                        });

                                    });

                                } else {
                                    res.json({ success: false, msg: "Wrong tempPass" })
                                }
                            }
                        }
                    })
                }
            })
        } else {
            if (body.oldPass) {
                User.findById(jwt.decode(body.id).id, function (err, user) {
                    if(user){
                        console.log( typeof(body.oldPass) + ":" + body.oldPass);
                        console.log(typeof(user.password) + ":"+ user.password);
                        if (bcrypt.compareSync(body.oldPass, user.password)) {

                            bcrypt.genSalt(10, function (err, salt) {
                                bcrypt.hash(body.newPass, salt, function (err, hash) {
                                    if (err) {
                                        console.log(err);
                                    }
                                    else {
                                        User.updateOne({ _id: user._id }, { password: hash }, function (err, result) {
                                            if (err) console.log(err);
                                            else {
                                                res.json({ success: true, msg: "Пароль успешно заменен" })
                                            }
                                        })
                                    }
                                });

                            });

                            

                        } else {
                            res.json({ success: false, msg: "Старый пароль не верен" })
                        }

                    }else res.json({ success: false, msg: "Пользователь не найден" })

                })
            } else {
                res.json({ success: false, msg: "Не введен старый пароль" })
            }
        }

    } catch (e) {
        console.log(e);
        res.json({ success: false, msg: e.message })
    }

}