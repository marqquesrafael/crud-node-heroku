exports.up = function (knex) {
  return knex.schema.createTable("usuario", (table) => {
    table.increments().primary();
    table.string("nome").notNullable();
    table.integer("numero");
    table.dateTime("dtcadastro").defaultTo(knex.fn.now());
    table.integer('id_tipo').unsigned().notNullable();
    
    table.foreign('id_tipo').references('id').inTable('tipo');
  });
};

exports.down = function (knex) {};
