var pg = require('pg'); //native libpq bindings = `var pg = require('pg').native`
var conString = "postgres://postgres:fariqorik@localhost:5432/postgres";

var client = new pg.Client(conString);
client.connect();


function initDb(){
	//client.query("DROP TABLE player");
	client.query("CREATE TABLE player(name varchar(10), pass varchar(10), guild varchar(10))");
	console.log('Created Table : user');
	client.query("INSERT INTO player(name, pass, guild) values($1, $2, $3)", ['Kirito', 'asuna', 'Solaris']);
	client.query("INSERT INTO player(name, pass, guild) values($1, $2, $3)", ['Asuna', 'kirito', 'Solaris']);
	console.log('Inserted 2 record.');
}

function search(name){
	var query = client.query("SELECT * FROM player WHERE name = $1", [name]);

	//can stream row results back 1 at a time
	query.on('row', function(row) {
	  console.log(row);
	});
}

initDb();
search('Kirito');
