
exports.up = function(knex, Promise) {
  return knex.schema.createTable('classing_questions', function(table) {
    table.increments();
    table.string('question').notNullable();
    table.boolean('stock_legal').nullable();
    table.boolean('sts_legal').nullable();
    table.boolean('stx_legal').nullable();
    table.boolean('stu_legal').nullable();
    table.boolean('sp_legal').nullable();
    table.boolean('sm_legal').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('classing_questions');
};
