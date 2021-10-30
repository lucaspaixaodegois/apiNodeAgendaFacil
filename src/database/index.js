const mongoose = require('mongoose');//importando o mongoose para conexão com banco 

//passsando o  endereço/login/senha para acessar o banco na nuvem.
mongoose.connect('mongodb+srv://root:root@clusterdeploy.hl91e.mongodb.net/agendaFacil', {
  useNewUrlParser: true, useUnifiedTopoLogy: true
}).then(() => {
  console.log("Conexão com MongoDB realizada com sucesso!");
}).catch((erro) => {
  console.log("Erro: A conexão com MongoDB não foi realizada com sucesso!");
});

//mongoose.Promise = global.Promise;
module.exports = mongoose;