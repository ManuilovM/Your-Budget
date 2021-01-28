const express = require("express"); 
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const configdb = require("./config/db");
const account = require ("./routes/account");
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require ('express-session');


/* 
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: 'SECRET' }));
 
// Passport:
app.use(passport.initialize());
app.use(passport.session()); */



const app = express();
//const port = process.env.PORT||8080;
const port =3000;

/* -------------------------------------------------------------------------- */
/*                  // Подключение вспомогательных технологий                 */
/* -------------------------------------------------------------------------- */

app.use(cors());
//app.use('/account', bodyParser());
app.use(bodyParser.json());


app.use( cookieParser());
app.use(session({ 
  secret: configdb.secret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(passport.initialize());
app.use(passport.session());

/* -------------------------------------------------------------------------- */
/*                          // Подключение к MongoDB                          */
/* -------------------------------------------------------------------------- */

mongoose.connect(configdb.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  mongoose.connection.on("connected", () => {
    console.log("Подключение к " + configdb.db + " прошло успешно");
  });
  mongoose.connection.on("error", (err) => {
    console.log("Подключение к " + configdb.db + ":" + err);
  });
  
/* -------------------------------------------------------------------------- */
/*                              // Маршрутизация                              */
/* -------------------------------------------------------------------------- */


app.use('/account', account);


/* app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname + "/public/index.html"));
} ) */


/* -------------------------------------------------------------------------- */
/*                               Запуск сервера                               */
/* -------------------------------------------------------------------------- */

app.listen(port, () => {
    console.log("Cервер был запущен по порту: " + port);
});
  