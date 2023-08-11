const Producto =  require('../models/products');
const Variety = require('../models/variety');
const Category =  require('../models/category');
const Subcategory = require('../models/subcategory');
const Income = require('../models/income');
const IncomeDetails = require('../models/income_details');
const Gallery = require('../models/gallery');
var slugify = require('slugify');
var fs = require('fs');
var path = require('path');

const register_product = async(req, res) => {
    if(req.user){
        let data= req.body;
        //console.log(data);

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
                console.log(product)
            } catch (error) {
                console.log(error);
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

// Actualizar un producto
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
                            subcategory: data.subcategory,
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
                        subcategory: data.subcategory,
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
                        subcategory: data.subcategory,
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
                        subcategory: data.subcategory,
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
};

const get_variety_product = async(req, res)=>{
    if(req.user){
        let id = req.params['id'];
        const variety = await Variety.find({product: id}).sort({stock: -1});
        res.status(200).send(variety);
    }else{
        res.status(500).send({data:undefined, message: 'Error token'});
    }
};

const delete_variety_product = async(req, res)=>{
    if(req.user){
        let id = req.params['id'];

        let reg = await Variety.findById({_id:id});
        if(reg.stock == 0){
            const variety = await Variety.findByIdAndRemove({_id: id});
            res.status(200).send(variety);
        }else{
            res.status(200).send({data:undefined, message: 'No se puede eliminar esta variedad'});
        }
        
    }else{
        res.status(500).send({data:undefined, message: 'Error token'});
    }
};

const get_all_products = async(req, res) => {
    if(req.user){
         let produts = await Producto.find({state: true}).sort({createdAt: -1});
         res.status(200).send(produts);
    }else{
        res.status(500).send({data:undefined, message: 'Error token'});
    }
};

const register_income = async(req, res) => {
    if(req.user){
        const data = req.body; //Ingreso
        try {
            const reg_serie = await Income.find().sort({createdAt: -1});

            if(reg_serie.length == 0){
                data.series = 1;
            }else{
                data.series = reg_serie[0].series + 1;
            }
            const details = JSON.parse(data.details); //Detalles de ingreso

            const img_path = req.files.document.path;
            const str_img = img_path.split("\\");
            const str_document = str_img[2];

            data.document = str_document;
            data.user = req.user.sub
            const income = await Income.create(data);

            for(var item of details){
                item.income = income._id;
                await IncomeDetails.create(item);

                //Actualizar stock de variedad
                const variety = await Variety.findById({_id: item.variety});
                await Variety.findByIdAndUpdate({_id: item.variety}, {
                    stock: parseInt(variety.stock) + parseInt(item.amount)
                });

                // Actualizar stock de producto
                const product = await Producto.findById({_id: item.product});
                await Producto.findByIdAndUpdate({_id: item.product}, {
                    stock: parseInt(product.stock) + parseInt(item.amount)
                });

                // Margen de ganancia
                if(product.stock >= 1){
                    // Calculando subtotales
                    const residual_subtotal = product.price * product.stock;
                    const revenue = Math.ceil((item.unit_price * data.revenue) / 100);
                    const income_subtotal = (parseFloat(item.unit_price) * parseFloat(revenue)) * item.amount;

                    const quantities = parseInt(product.stock) + parseInt(item.amount);
                    const subtotales = parseFloat(residual_subtotal) + parseFloat(income_subtotal);

                    console.log('subtotales',subtotales +' '+ 'cantidades', quantities);
                    const equilibrium_price = Math.ceil(subtotales/quantities);
                    await Producto.findByIdAndUpdate({_id: item.product}, {
                        price: equilibrium_price
                    });
                }else{
                    const revenue = Math.ceil((item.unit_price * data.revenue) / 100);
                    await Producto.findByIdAndUpdate({_id: item.product}, {
                        price: parseFloat(item.unit_price) + parseFloat(revenue)
                    });
                }
                
            }
            res.status(200).send(income);
    
        } catch (error) {
           res.status(200).send({message: 'No se puedo registrar el ingreso'}); 
        }
    }else{
        res.status(500).send({data:undefined, message: 'Error token'});
    }
};

// Registrar imagne del producto
const register_imagen = async(req, res) => {
    if(req.user){
        let data= req.body;

        let img_path = req.files.imagen.path;
        let str_img = img_path.split("\\");
        let str_imagen = str_img[2];

        data.imagen = str_imagen;

        try {
            const imagen = await Gallery.create(data);
            res.status(200).send(imagen);
        } catch (error) {
            res.status(500).send({data:undefined, message: 'No se pudo subir la imagen'})
        }
    }else{
        res.status(500).send({data:undefined, message: 'Error token'})
    }
};

const get_gallery_product = async (req, res) => {
  let img = req.params["img"];
  fs.stat("./uploads/gallery/" + img, (error) => {
    if (error) {
      let img_path = "./uploads/default.jpg";
      res.status(200).sendFile(path.resolve(img_path));
    } else {
      let img_path = "./uploads/gallery/" + img;
      res.status(200).sendFile(path.resolve(img_path));
    }
  });
};

const list_image_gallery = async (req, res) => {
  if (req.user) {
    const id = req.params['id'];

    const gallery = await Gallery.find({product: id});
    res.status(200).send(gallery);

  } else {
    res.status(500).send({ data: undefined, message: "Error token" });
  }
};

const delete_image_gallery = async (req, res) => {
    if (req.user) {
      const id = req.params['id'];
  
      try {
        let reg = await Gallery.findById({_id:id})
        let img_path = "./uploads/gallery/" + reg.imagen;
        fs.unlinkSync(img_path);
        const gallery = await Gallery.findByIdAndRemove({_id: id});
        res.status(200).send(gallery);
  
      } catch (error) {
        res.status(200).send({data: undefined, message: 'No se puedo eliminar la imagen'});
      }
    } else {
      res.status(500).send({ data: undefined, message: "Error token" });
    }
};

const create_category = async (req, res) => {
    if (req.user) {
      const data = req.body;

      const reg = await Category.find({title: data.title});
      if(reg.length == 0){
        data.slug = slugify(data.title).toLowerCase();
        const category = await Category.create(data);
        res.status(200).send(category);
      }else{
        res.status(200).send({ data: undefined, message: "La categoria ya existe" });
      }

     
    } else {
      res.status(500).send({ data: undefined, message: "Error token" });
    }
};

module.exports = {
    register_product,
    get_products,
    get_frontPage_product,
    get_product_id,
    update_product,
    register_variety_product,
    get_variety_product,
    delete_variety_product,
    get_all_products,
    register_income,
    register_imagen,
    get_gallery_product,
    list_image_gallery,
    delete_image_gallery,
    create_category
}