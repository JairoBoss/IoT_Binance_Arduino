require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./src/model");

const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var corsOptions = {
  origin: `*`,
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );

  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");

  next();
});

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Conectado a la base de datos!");
  })
  .catch((err) => {
    console.log(
      `Ocurrio un error al tratar de conectarlo a la base de datos! ${err}`
    );
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    titulo: "API para ordinario microcontroladores",
    alumnos: "Jairo & Daniel",
  });
});

require("./src/routes/movimiento.routes")(app);
require("./src/routes/binance.routes")(app);

app.listen(PORT, () => {
  console.log(`server en el puerto ${PORT}`);
});
