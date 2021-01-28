const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
var passport       = require('passport');
var LocalStrategy  = require('passport-local').Strategy;


passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function(username, password, done){
  User.findOne({ email : username},function(err,user){
    return err 
      ? console.log(err)
      : user
        ? bcrypt.compareSync(password, user.password)  
          ? done(null, user, { success: true, msg: "Вход выполнен", userName: user.name })
          : done(null, false, { success: false, msg: 'Не верный пароль'})
        : done(null, false, {  success: false, msg: 'Пользователь не найден' });
  });
}));


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
    
    passport.authenticate('local',
    function(err, user, info) {
        return res.json(info);
    }
  ) (req, res)
    
}