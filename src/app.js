const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');

require("./models/Usuario");
const Usuario = mongoose.model('usuario');

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://root:root@clusterdeploy.hl91e.mongodb.net/agendaFacil', {
  useNewUrlParser: true,
  useUnifiedTopoLogy: true
}).then(() => {
  console.log("Conexão com MongoDB realizada com sucesso!");
}).catch((erro) => {
  console.log("Erro: A conexão com MongoDB não foi realizada com sucesso!");
});

//buscar por id
app.get("/usuario/:id", (req, res) => {

  Usuario.findById(req.params.id ).then((usuario) => {
    return res.json(usuario);
  }).catch((erro) => {
    return res.status(400).json({
      error: true,
      menssage: "Nenhum usuário encotrado!"
    })
  })



  // return res.json({ id: req.params.id })

});

//listar todos usuarios 
app.get("/", (req, res) => {
  Usuario.find({}).then((usuario) => {
    return res.json(usuario);
  }).catch((erro) => {
    return res.status(400).json({
      error: true,
      menssage: "Nenhum usuário encotrado!"
    })
  })

});

//criar usuario
app.post("/usuario", (req, res) => {
  const usuario = Usuario.create(req.body, (err) => {
    if (err) return res.status(400).json({
      error: true,
      menssage: "Error: Usuário nao foi cadastrado com sucesso!"
    })

    return res.status(201).json({
      error: false,
      menssage: "Usuário cadastrado com sucesso!"
    })

  })
});

app.listen(8080, () => {
  console.log(" Servidor iniciado na porta 8080: http:localhost:8080/")

});
