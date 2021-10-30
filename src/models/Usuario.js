const mongoose = require('mongoose');

const Usuario = new mongoose.Schema({
  nome: {
    type: String,
    require: true

  },
  cpf: {
    type: String,
    require: true

  }

},
  {
    timestamps: true,
  }

);
mongoose.model('usuario',Usuario);