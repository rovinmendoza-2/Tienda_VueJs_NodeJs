const express = require('express');
const usuarioController = require('../controllers/usuarioController');

const api = express.Router();

api.post('/register_user_admin', usuarioController.register_user_admin);
api.post('/login_users', usuarioController.login_users);

module.exports = api;
