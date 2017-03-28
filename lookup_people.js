let args = process.argv;


const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});


function reading(table1, output) {
  client.connect((err) => {
    if (err) {
      return console.error("Connection Error", err);
    }
    client.query("SELECT * FROM famous_people WHERE last_name = $1::text", [table1], (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }
      console.log("Searching...")
      console.log("Found 1 person(s) by the name ", table1);
      output();

      function output() {
      //can we get rid of anonymous in our object?
        console.log(result.rows[0]);
        client.end();
      }
    });
  });
}

reading(args[2]);





