const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const randomString  =require('../config/makeRandomString');
const jwt = require("jsonwebtoken");
const ts = require("../config/tokenSecrets");


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
    stringForRefreshToken:{
      type:String
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

module.exports.registerUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            if(err) {
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

module.exports.loginUser = function (req, res, next){
    let login = req.body;
    User.findOne({email: login.email}, function (err,user){
      if(err) console.log(err)
      else  if (user) { 
        if(bcrypt.compareSync(login.password, user.password)) {
          let stringForRefreshToken = randomString(20);
          let accessToken = jwt.sign({id: user._id}, ts.access, {expiresIn:20});
          let refreshToken = jwt.sign({stringForRefreshToken: stringForRefreshToken}, ts.refresh, {expiresIn: 60});
          User.updateOne({email: login.email}, {stringForRefreshToken: stringForRefreshToken}, function (err, result){
            if (err) console.log (err);
            else res.json({success:true, msg: "Вход выполнен",userName: user.name, accessToken: accessToken, refreshToken: refreshToken});
          });
        }else res.json({success: false, msg: "Не верный пароль"})

      } else res.json({success: false, msg: "Не верный email"})

    })
}

module.exports.logOut = function(userid, callback ){
  User.updateOne({_id: userid}, {stringForRefreshToken: ""}, callback)
}