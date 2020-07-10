exports.seed = function (knex) {
    return knex("tipo").insert([
        {descricao: "administrador"},
        {descricao: "padrão"},       
    ])
}