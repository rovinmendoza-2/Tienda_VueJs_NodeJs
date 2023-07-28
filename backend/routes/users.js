const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const authetication = require('../middlewares/authenticate');

const api = express.Router();

api.post('/register_user_admin', authetication.decodeToken, usuarioController.register_user_admin);
api.post('/login_users', usuarioController.login_users);
api.get('/list_users/:filter?', authetication.decodeToken, usuarioController.list_users);

module.exports = api;
