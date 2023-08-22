const Car = require('../models/car');
const Variety = require('../models/variety');

const create_product_car = async(req, res) => {
    if(req.user){
        let data = req.body;

        const variety = await Variety.findById({_id:data.variety}).populate('product');
        if(data.amount <= variety.stock){
            if(variety.product.price >=1 ){
                const car_product = await Car.create(data);
                res.status(200).send(car_product);
            }else{
                res.status(200).send({dat: undefined, message: 'El producto tiene precion en 0'});
            }

        }else{
            res.status(200).send({data:undefined, message: 'Se supero el stock del producto'})
        }
    }else{
        res.status(500).send({data: undefined, message: 'Error token'});
    }
};

module.exports = {
    create_product_car,
}