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


app.get("/", (req, res) => {
  return res.json({ titulo: "Criar api" });
});

app.post("/usuario", (req, res) => {
  const usuario = Usuario.create(req.body, (err) => {
    if (err) return res.status(400).json({
      error: true,
      menssage: "Error: Usuário nao foi cadastrado com sucesso!"
    })

    return res.status(400).json({
      error: false,
      menssage: "Error: Usuário cadastrado com sucesso!"
    })

  })
});

app.listen(8080, () => {
  console.log(" Servidor iniciado na porta 8080: http:localhost:8080/")

});
