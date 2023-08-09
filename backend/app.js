const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const app = express();

const customer_router = require("./routes/customer");
const users_router = require("./routes/users");
const products_router = require("./routes/product");
const public_product = require("./routes/public");

app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyparser.json({ limit: "50mb", extended: true }));

const port = process.env.port || 4200;

//Conexion a base de datos
mongoose
  .connect("mongodb://127.0.0.1:27017/tienda")
  .then(() => {
    console.log("Conexión exitosa a la base de datos");
    app.listen(port, () => {
      console.log("El servidor se ejecuto en el puerto 4200");
    });
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Allow", "GET, PUT, POST, DELETE, OPTIONS");
  next();
});

app.use("/api", customer_router);
app.use("/api", users_router);
app.use("/api", products_router);
app.use("/api", public_product);

module.exports = app;
