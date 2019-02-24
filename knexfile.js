// Update with your config settings.
var options = {

  development: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      database: 'mock_db',
      user:     'postgres',
      password: 'Senopati-71!'
    },
    pool: {
      min: 2,
      max: 10
    },
    seeds: {
      directory: './seeds/development'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

var environment = process.env.NODE_ENV || 'development';
var config = options[environment];
module.exports = require('knex')(config);