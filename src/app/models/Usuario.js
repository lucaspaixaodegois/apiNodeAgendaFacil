//importando o mongoose
const mongoose = require('mongoose');

//defindo  o esquema/tabela/entidade e seus campos e tipos.
const Usuario = new mongoose.Schema({

  nome: {//propriedade
    type: String,//tipo string 
    require: true //preenchimento obrigatorio
  },

  cpf: {//propriedade
    type: String,//tipo string 
    require: true //preenchimento obrigatorio
  }

},
  {
    timestamps: true,//salvar diaHora de alteracao/criacao
  }

);
//definindo o model usuario no banco com mongoose
mongoose.model('usuario', Usuario);