const express = require('express');
var multipart = require('connect-multiparty');

const productController = require('../controllers/productController');
const authetication = require('../middlewares/authenticate');

var path = multipart({uploadDir: './uploads/products'});
const api = express.Router();


api.post('/register_product', [authetication.decodeToken, path], productController.register_product);


module.exports = api;
