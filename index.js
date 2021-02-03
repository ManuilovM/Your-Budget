const express = require("express"); 
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const configdb = require("./config/db");
const account = require ("./routes/account");
const budgetItems= require('./routes/budgetItems');
const identify = require("./routes/identify_ Mw")






const app = express();
//const port = process.env.PORT||8080;
const port =3000;

/* -------------------------------------------------------------------------- */
/*                  // Подключение вспомогательных технологий                 */
/* -------------------------------------------------------------------------- */
const corsOptions = {
  origin: 'http://localhost:4200'
}
app.use(cors(corsOptions));

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


/* app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname + "/public/index.html"));
} ) */


/* -------------------------------------------------------------------------- */
/*                               Запуск сервера                               */
/* -------------------------------------------------------------------------- */

app.listen(port, () => {
    console.log("Cервер был запущен по порту: " + port);
});
  