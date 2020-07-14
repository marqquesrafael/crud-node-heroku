const connect = require("../database/connect");

const UserController = {
  async index(req, res) {
    try {
      const {page = 1} = req.query;
      var porpagina = 1;
      const usuarios = await connect("usuario")
        .join("tipo", "tipo.id", "usuario.id_tipo")
        .limit(porpagina)
        .offset((page-1)*porpagina) // deslocamento da página
        .select(["usuario.nome", "usuario.numero", "tipo.descricao"]);
      return res.json(usuarios);
    } catch (error) {
      return res.status(500).json({ msg: "erro interno" });
    }
  },
  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ msg: "Id inválido!" });
      }
      const usuarios = await connect("usuario")
        .join("tipo", "tipo.id", "usuario.id_tipo")
        .where("usuario.id", id)
        .select(["usuario.nome", "usuario.numero", "tipo.descricao"])
        .first();
      return res.json(usuarios);
    } catch (error) {
      return res.status(500).json({ msg: "Erro interno" });
    }
  },
  async create(req, res) {
    try {
      const { nome, numero, id_tipo } = req.body;
      if (!nome) {
        return res.status(400).json({ msg: "Nome inválido!" });
      }
      if (!id_tipo) {
        return res.status(400).json({ msg: "Tipo inválido!" });
      }
      const [id] = await connect("usuario").insert({
        nome,
        numero,
        id_tipo,
      });
      return res.json({ id });
    } catch (error) {
      return res.status(500).json({ msg: "erro interno" });
    }
  },
  async update(req, res) {
    try {
      const { nome, numero, id_tipo } = req.body;
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ msg: "Id inválido!" });
      }
      const update = await connect("usuario")
        .update({
          nome,
          numero,
          id_tipo,
        })
        .where("id", id);
      return res.json(update);
    } catch (error) {
      return res.status(500).json({ msg: "erro interno" });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ msg: "Id inválido!" });
      }
      const usuarios = await connect("usuario")
        .delete()
        .where("usuario.id", id);
      return res.json(usuarios);
    } catch (error) {
      return res.status(500).json({ msg: "erro interno" });
    }
  },
};

module.exports = UserController;
