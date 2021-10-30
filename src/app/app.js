//importando o express
const express = require('express');
//importando o mongoose para conexão com banc
const mongoose = require('mongoose');

require("../database/index");
require("./models/Usuario");
const Usuario = mongoose.model('usuario');

const app = express();
//habilitando o uso do json
app.use(express.json());
  

//listar todos usuarios 
app.get("/", (req, res) => {
  Usuario.find({}).then((usuario) => {
    return res.json(usuario);
  }).catch((erro) => {
    return res.status(400).json({
      error: true,
      message: "Nenhum usuário encotrado!"
    })
  })

});

//criar usuario
app.post("/usuario", (req, res) => {
  const usuario = Usuario.create(req.body, (err) => {
    if (err) return res.status(400).json({
      error: true,
      message: "Error: Usuário nao foi cadastrado com sucesso!"
    })

    return res.status(201).json({
      error: false,
      menssage: "Usuário cadastrado com sucesso!"
    })

  })
});

//buscar por id
app.get("/usuario/:id", (req, res) => {

  Usuario.findById(req.params.id).then((usuario) => {
    return res.json(usuario);
  }).catch((erro) => {
    return res.status(400).json({
      error: true,
      message: "Nenhum usuário encotrado!"
    })
  })

});

//editar usuario
app.put("/usuario/:id", (req, res) => {

  const usuario = Usuario.updateOne({ _id: req.params.id }, req.body, (err) => {
    if (err) return res.status(400).json({
      error: true,
      message: "Error:Usuário não foi editado com sucesso!"
    });

    return res.json({
      error: false,
      message: "Usuário editado com sucesso!",
    });
  });
});


//editar usuario
app.delete("/usuario/:id", (req, res) => {

  const usuario = Usuario.deleteOne({ _id: req.params.id }, (err) => {
    if (err) return res.status(400).json({
      error: true,
      message: "Error:Usuário não foi deletado com sucesso!"
    });

    return res.json({
      error: false,
      message: "Usuário deletado com sucesso!",
    });
  });
});


app.listen(8080, () => {
  console.log(" Servidor iniciado na porta 8080: http:localhost:8080/")

});


