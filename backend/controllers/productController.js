const Producto =  require('../models/products');
var slugify = require('slugify')

const register_product = async(req, res) => {
    if(req.user){
        let data= req.body;

        let products = await Producto.find({
            title: data.title
        });
        console.log(products.length);

        if(products.length >= 1){
            res.status(200).send({data: undefined, message: 'El titulo del producto ya existe'});
        }else{
            //Registrar producto
            let img_path = req.files.frontPage.path;
            let str_img = img_path.split("\\");
            let str_frontPage = str_img[2];
            console.log(str_frontPage);

            data.frontPage = str_frontPage;
            data.slug = slugify(data.title);
            try {
                const product = await Producto.create(data);
                res.status(200).send({data: product, message: 'Producto guardado'})
            } catch (error) {
                res.status(500).send({data:undefined, message: 'No se pudo crear el producto'})
            }
        }
    }else{
        res.status(500).send({data:undefined, message: 'Error token'})
    }
};

const get_products = async(req, res) => {
    if(req.user){
        let filter = req.params['filter'];
         let produts = await Producto.find({
            $or:[
                {title: new RegExp(filter, 'i')},
                {category: new RegExp(filter, 'i')}
            ]
         });
         res.status(200).send(produts);
    }else{
        res.status(500).send({data:undefined, message: 'Error token'});
    }
}


module.exports = {
    register_product,
    get_products
}