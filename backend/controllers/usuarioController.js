const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt-nodejs");

const register_user_admin = async (req, res) => {
  console.log(req.body);

  const data = req.body;

  const usuarios = await Usuario.find({ email: data.email });

  console.log(usuarios);
  if (usuarios.length >= 1) {
    res
      .status(200)
      .send({ data: undefined, message: "El correo electronico ya existe" });
  } else {
    bcrypt.hash("123456", null, null, async (err, hash) => {
      if (err) {
        res.status(200).send({
          data: undefined,
          message: "No se pudo encriptar la contrasena",
        });
      } else {
        data.password = hash;
        const usuario = await Usuario.create(data);
        res.status(200).send({ data: usuario });
      }
    });
  }
};

module.exports = {
  register_user_admin,
};
