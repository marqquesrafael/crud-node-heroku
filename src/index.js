require("dotenv").config();
const express = require("express");
const connect = require("./database/connect");

const app = express();
app.use(express.json());

app.get("/usuario", async (req, res) => {
  const usuarios = await connect("usuario")
    .join("tipo", "tipo.id", "usuario.id_tipo")
    .select(["usuario.nome", "usuario.numero", "tipo.descricao"]);
  return res.json(usuarios);
});

app.get("/usuario/:id", async (req, res) => {
  const { id } = req.params;
  const usuarios = await connect("usuario")
    .join("tipo", "tipo.id", "usuario.id_tipo")
    .where("usuario.id", id)
    .select(["usuario.nome", "usuario.numero", "tipo.descricao"])
    .first();
  return res.json(usuarios);
});

app.delete("/usuario/:id", async (req, res) => {
  const { id } = req.params;
  const usuarios = await connect("usuario")
  .delete()
  .where("usuario.id", id);
  return res.json(usuarios);
});

app.post("/usuario", async (req, res) => {
  const { nome, numero, id_tipo } = req.body;

  const [id] = await connect("usuario").insert({
    nome,
    numero,
    id_tipo,
  });
  return res.json({ id });
});

app.put("/usuario/:id", async (req, res) => {
  const { nome, numero, id_tipo } = req.body;
  const { id } = req.params;
  const update = await connect("usuario").update({
    nome,
    numero,
    id_tipo,
  }).where("id", id);
  return res.json(update);
});

app.listen(process.env.PORT | 3000);
