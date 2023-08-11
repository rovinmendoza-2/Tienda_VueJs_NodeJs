const express = require('express');
const publicProductController = require('../controllers/publicProductController');

const api = express.Router();

api.get('/get_new_product', publicProductController.get_new_product);
api.get('/get_product_recommended', publicProductController.get_product_recommended);
api.get('/get_product_shop', publicProductController.get_product_shop);

module.exports = api;
