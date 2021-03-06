// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/autocross_db'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
