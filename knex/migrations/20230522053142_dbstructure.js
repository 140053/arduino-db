/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    knex.schema.hasTable('dataholder').then(function(exists) {
        if (!exists) {
          return knex.schema.createTable('dataholder', function(t) {
            t.increments('id').primary();
            t.string('fire', 100);
            t.string('gas', 100);
            t.timestamp('created_at').defaultTo(knex.fn.now());          
          });
        }
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('dataholder');
  
};
