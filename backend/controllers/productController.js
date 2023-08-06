const Producto =  require('../models/products');
const Variety = require('../models/variety');
var slugify = require('slugify');
var fs = require('fs');
var path = require('path');

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
                res.status(200).send({data: product})
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
         }).sort({createdAt: -1});
         res.status(200).send(produts);
    }else{
        res.status(500).send({data:undefined, message: 'Error token'});
    }
};

//obtener portada
const get_frontPage_product = async(req, res) => {
    let img = req.params['img']
    fs.stat('./uploads/products/'+img, (error) => {
        if(error){
            let img_path = './uploads/default.jpg';
            res.status(200).sendFile(path.resolve(img_path));
        }else{
            let img_path = './uploads/products/'+img;
            res.status(200).sendFile(path.resolve(img_path));
        }
    })
        
}

//obtenemos el producto para editarlo
const get_product_id = async(req, res) =>{
    if(req.user){
        let id = req.params['id'];
        try {
            let product = await Producto.findById({_id: id})
            res.status(200).send(product);
        } catch (error) {
            res.status(200).send(undefined);
        }
    }else{
        res.status(500).send({data:undefined, message: 'Error Token'});
    }
};

const update_product = async(req, res) => {
    console.log("--", req.files);
    if(req.user){
        let data= req.body;
        let id = req.params['id']

        let products = await Producto.find({
            title: data.title
        });
        console.log(products.length);

        if(products.length >= 1){
            if(products[0]._id == id){
                //Actualizar producto
                if(req.files){
                    let img_path = req.files.frontPage.path;
                    let str_img = img_path.split("\\");
                    let str_frontPage = str_img[2];
                    console.log(str_frontPage);
    
                    data.frontPage = str_frontPage;
                    data.slug = slugify(data.title);
                    try {
                        const product = await Producto.findByIdAndUpdate({_id:id}, {
                            title: data.title,
                            category: data.category,
                            variety: data.variety,
                            description: data.description,
                            state: data.stat,
                            discount: data.discount,
                            str_frontPage: data.str_frontPage
                        });
                        res.status(200).send({data: product})
                    } catch (error) {
                     res.status(500).send({data:undefined, message: 'No se pudo crear el producto'})
                    }
                }else{
                
                data.slug = slugify(data.title);
                try {
                    const product = await Producto.findByIdAndUpdate({_id:id}, {
                        title: data.title,
                        category: data.category,
                        variety: data.variety,
                        description: data.description,
                        state: data.stat,
                        discount: data.discount
                    });
                    res.status(200).send({data: product});
                } catch (error) {
                    res.status(500).send({data:undefined, message: 'No se pudo crear el producto'})
                }
            }
            }else{
                res.status(200).send({data: undefined, message: 'El titulo del producto ya existe'});
            }
        }else{
            //Actualizar producto
            if(req.files){
                let img_path = req.files.frontPage.path;
                let str_img = img_path.split("\\");
                let str_frontPage = str_img[2];
                console.log(str_frontPage);
    
                data.frontPage = str_frontPage;
                data.slug = slugify(data.title);
                try {
                    const product = await Producto.findByIdAndUpdate({_id:id}, {
                        title: data.title,
                        category: data.category,
                        variety: data.variety,
                        description: data.description,
                        state: data.stat,
                        discount: data.discount,
                        str_frontPage: data.str_frontPage
                    });
                    res.status(200).send({data: product})
                } catch (error) {
                    res.status(500).send({data:undefined, message: 'No se pudo crear el producto'})
                }
            }else{
                
                data.slug = slugify(data.title);
                try {
                    const product = await Producto.findByIdAndUpdate({_id:id}, {
                        title: data.title,
                        category: data.category,
                        variety: data.variety,
                        description: data.description,
                        state: data.stat,
                        discount: data.discount
                    });
                    res.status(200).send({data: product})
                } catch (error) {
                    res.status(500).send({data:undefined, message: 'No se pudo crear el producto'})
                }
            }
        }
    }else{
        res.status(500).send({data:undefined, message: 'Error token'})
    }
};

const register_variety_product = async(req, res) => {
    if(req.user){
        let data = req.body;
        const variety = await Variety.create(data);
        res.status(200).send({data: variety});
    }else{
        res.status(500).send({data:undefined, message: 'Error token'});
    }
}
module.exports = {
    register_product,
    get_products,
    get_frontPage_product,
    get_product_id,
    update_product,
    register_variety_product
}