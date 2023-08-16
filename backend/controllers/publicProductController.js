const Product = require("../models/products");
const Category = require("../models/category");
const Subcategory = require("../models/subcategory");

const get_new_product = async (req, res) => {
  const product = await Product.find({ state: true })
    .sort({ createdAt: -1 })
    .limit(4);
  res.status(200).send(product);
};

const get_product_recommended = async (req, res) => {
  const product = await Product.find({ state: true }).limit(8);
  res.status(200).send(product);
};

const get_product_shop = async (req, res) => {
  const product = await Product.find({ state: true }).sort({ createdAt: -1 });
  res.status(200).send(product);
  console.log(product);
};

// Listar categorias
const list_category_product = async (req, res) => {
  var regs = await Category.find({state: true}).sort({ title: 1 });
  var categories = [];

  for (var item of regs) {
    var subcategory = await Subcategory.find({ category: item._id });
    var products = await Product.find({ category: item.title });

    categories.push({
      category: item,
      subcategory,
      nproducts: products.length,
    });
  }
  res.status(200).send(categories);
};

module.exports = {
  get_new_product,
  get_product_recommended,
  get_product_shop,
  list_category_product,
};
