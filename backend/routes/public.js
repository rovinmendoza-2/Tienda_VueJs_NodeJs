const express = require('express');
const publicProductController = require('../controllers/publicProductController');

const api = express.Router();

api.get('/get_new_product', publicProductController.get_new_product);

module.exports = api;
