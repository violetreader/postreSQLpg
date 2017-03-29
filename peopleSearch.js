require('dotenv').config();
let args = process.argv;

const knex = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: 'knex,public'
});



function reading(input) {
  knex.select().from('famous_people')
  .where('last_name', '=', input)
  .asCallback(function(err, rows) {
    if (err) {
      return console.error(err);
    }
    rows.forEach((row) => {
      console.log(row);
      process.exit()
    });
  });
}

reading(args[2]);