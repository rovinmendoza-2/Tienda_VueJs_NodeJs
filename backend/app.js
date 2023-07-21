const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = process.env.port || 4200;

//Conexion a base de datos
mongoose.connect('mongodb://127.0.0.1:27017/tienda')
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
    app.listen(port, () => {
        console.log("El servidor se ejecuto en el puerto 4200");
    });
  })
  .catch(error => {
    console.error('Error al conectar a la base de datos:', error);
  });




module.exports = app;