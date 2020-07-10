exports.up = function (knex) {
  return knex.schema.createTable("tipo", (table) => {
    table.increments().primary();
    table.string("descricao").notNullable();
  });
};

exports.down = function (knex) {};
