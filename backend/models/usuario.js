const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = Schema({
    nombres:    {type: String, required: true},
    apellidos:  {type: String, required: true},
    email:      {type: String, required: true, unique: true},
    rol:        {type: String, required: true},
    password:   {type: String, required: true}
});

module.exports = mongoose.model('usuario', UsuarioSchema);