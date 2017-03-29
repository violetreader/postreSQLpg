// Update with your config settings.
let json = require('./settings.json');

module.exports = {

  development: {
    client: 'pg',
    // connection: json,
    connection: {
      user:     json.user,
      password: json.password,
      database: json.database,
      hostname: json.hostname,
      port:     json.port,
      ssl:      json.ssl
    }
  }
};