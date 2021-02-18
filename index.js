const express = require("express"); 
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const configdb = require("./config/db");
const account = require ("./routes/account");
const budgetItems= require('./routes/budgetItems');
const identify = require("./routes/identify_ Mw");
const path = require ("path");






const app = express();
const port = process.env.PORT||8080;
//const port =3000;

/* -------------------------------------------------------------------------- */
/*                  // Подключение вспомогательных технологий                 */
/* -------------------------------------------------------------------------- */

app.use(cors());

app.use(bodyParser.json());

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
app.use('/budgetItems', identify);
app.use('/budgetItems', budgetItems );

app.get('/runtime.js', (req, res)=>{
  res.sendFile(path.join(__dirname + "/public/runtime.js"));
} ) ;

app.get('/polyfills.js', (req, res)=>{
  res.sendFile(path.join(__dirname + "/public/polyfills.js"));
} ) ;

app.get('/styles.js', (req, res)=>{
  res.sendFile(path.join(__dirname + "/public/styles.js"));
} ) ;
app.get('/vendor.js', (req, res)=>{
  res.sendFile(path.join(__dirname + "/public/vendor.js"));
} ) ;
app.get('/main.js', (req, res)=>{
  res.sendFile(path.join(__dirname + "/public/main.js"));
} ) ;
app.get('/favicon.ico', (req, res)=>{
  res.sendFile(path.join(__dirname + "/public/favicon.ico"));
} ) ;
app.get('/404', (req, res)=>{
  res.status(404).end();
}) 

 app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname + "/public/index.html"));
} ) 



/* -------------------------------------------------------------------------- */
/*                               Запуск сервера                               */
/* -------------------------------------------------------------------------- */

app.listen(port, () => {
    console.log("Cервер был запущен по порту: " + port);
});
  