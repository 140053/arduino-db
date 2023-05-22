// Update with your config settings.
require('dotenv').config(); 
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "./knex/migrations"
    }, 
    seeds: {
      tableName: 'knex_seeds',
      directory: "./knex/seeds"
    }, 
  }

};
