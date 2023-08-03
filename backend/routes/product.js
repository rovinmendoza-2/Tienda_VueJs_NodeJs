const express = require('express');
var multipart = require('connect-multiparty');

const productController = require('../controllers/productController');
const authetication = require('../middlewares/authenticate');

var path = multipart({uploadDir: './uploads/products'});
const api = express.Router();


api.post('/register_product', [authetication.decodeToken, path], productController.register_product);
api.get('/get_products/:filter?', authetication.decodeToken, productController.get_products);
api.get('/get_frontPage_product/:img', productController.get_frontPage_product);
api.get('/get_product_id/:id',authetication.decodeToken, productController.get_product_id);

module.exports = api;
