require('dotenv').config();
let args = process.argv;

const knex = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: 'knex,public'
});



function insertingPerson(first, last, birth) {
  knex.insert({first_name: first, last_name: last, birthdate: birth})
  .into("famous_people")
  .asCallback(function(err, rows) {
    if (err) {
      return console.error(err);
    }
    console.log(rows);
    process.exit()
  });
}

insertingPerson(args[2], args[3], args[4]);