const Users = require("../models/users");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("../helpers/jwt");

//Funcion para registrar un usuario
const register_user_admin = async (req, res) => {
  console.log(req.user);

  if (req.user) {
    const data = req.body;

    const users = await Users.find({ email: data.email });

    console.log(users);
    if (users.length >= 1) {
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
          const user = await Users.create(data);
          res.status(200).send({ data: user });
        }
      });
    }
  } else {
    res.status(500).send({ message: "Error token" });
  }
};

//Funcion para iniciar sesion
const login_users = async (req, res) => {
  const data = req.body;
  console.log(data);

  const users = await Users.find({ email: data.email });
  if (users.length >= 1) {
    //El correo existe
    bcrypt.compare(data.password, users[0].password, async (err, check) => {
      console.log(check);
      if (check) {
        //generamos token de acceso jwt
        res
          .status(200)
          .send({ token: jwt.createToken(users[0]), userLog: users[0] });
      } else {
        res
          .status(200)
          .send({ data: undefined, message: "El password es incorrecto" });
      }
    });
  } else {
    res
      .status(200)
      .send({ data: undefined, message: "No se encontro el correo" });
  }
};
module.exports = {
  register_user_admin,
  login_users,
};
