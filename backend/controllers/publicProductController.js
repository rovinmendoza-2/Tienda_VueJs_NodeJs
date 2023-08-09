const Product = require('../models/products');

const get_new_product = async(req, res)=> {
    const product = await Product.find().sort({createdAt: -1}).limit(4);
    res.status(200).send(product);
};

module.exports = {
    get_new_product,
}