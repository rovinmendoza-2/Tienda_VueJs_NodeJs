const express = require('express');
const customerController = require('../controllers/customerControllerEcomerce');
const cauthenticate = require('../middlewares/cauthenticate');

const api = express.Router();

api.post('/create_product_car', cauthenticate.decodeToken, customerController.create_product_car);
api.get('/get_product_car', cauthenticate.decodeToken, customerController.get_product_car);

module.exports = api;