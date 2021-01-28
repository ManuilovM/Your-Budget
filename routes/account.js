const express = require("express"); 
const router  = express.Router();
const User = require("../models/user");

router.post('/reg', (req,res)=>{
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
})

router.post('/login', User.loginUser);



module.exports = router; 