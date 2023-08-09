const Customer = require('../models/customer');
const bcrypt = require('bcrypt-nodejs');

// Metodo para registrar usuarios
const register_user_ecomerce = async (req, res) => {
  const data = req.body;

  const reg_customer = await Customer.find({email: data.email});
  if(reg_customer.length >= 1){
    res.status(200).send({message: 'El correo electronico ya existe!'});
  }else{

    bcrypt.hash(data.password, null, null, async(err, hash)=> {
        if(err){
            res.status(200).send({message: 'Erro en la encriptacion'});
        }else{
            data.password = hash;
            const customer = await Customer.create(data);
            res.status(200).send(customer);
        }
    });
    
  }
  
};

module.exports = {
  register_user_ecomerce,
};
