const express = require("express"); 
const router  = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

router.post('/reg', (req,res)=>{
  try{
    let regForm = req.body;
    if (!regForm.privacyPolicy) res.json({success: false, msg: "Нет согласия с Политикой Конфидециальности"});
    let user = {};
    user.name = regForm.name;
    user.email = regForm.email;
    user.password = regForm.password;
    User.registerUser(user, function(err, user){
        if(err) {
          console.log(err);
          if (err.message.indexOf("E11000 duplicate key error collection")!==-1)  
              res.json({success: false, msg: "Пользователь с таким адресом уже существует"}) //пользователь уже существует
          else res.json({success: false, msg: err.message}) //иная ошибка
        }
        else res.json({success: true, msg: "Пользователь успешно зарегистрирован"})
      })
  }catch(e){
    console.log(e);
    res.json({success:false, msg: "Не коректный запрос"})
  }
})

router.post('/login', User.loginUser);

router.post('/logout', (req, res)=>{
  try { // на случай если не будет токена
    let userid = jwt.decode(req.body.accessToken).id;
    User.logOut(req, userid, function (err, result){
      err ? console.log(err)
      :res.json({success: true, msg: "Выход выполнен"})
     })
  }catch(e) {
    console.log(e);
    res.json({success:false, msg: "нет токена"})
  }
});

router.post('/refreshTokens', User.refreshTokens);

router.post('/forgotPass', User.forgotPass);

module.exports = router; 