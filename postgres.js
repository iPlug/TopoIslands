var pg = require('pg'); //native libpq bindings = `var pg = require('pg').native`
var conString = "postgres://postgres:fariqorik@localhost:5432/postgres";
//var conString = 'postgres://nijegwbjqbuihp:my6WheKVlqtm3UHFV4NKgu5nov@ec2-54-243-247-55.compute-1.amazonaws.com:5432/d6imoto5c8i6ej';
var client = new pg.Client(conString);
client.connect();


function initDb(){
	client.query("DROP TABLE player");
	client.query("CREATE TABLE player(name varchar(10) PRIMARY KEY, pass varchar(10), level integer, exp integer , axe integer, hammer integer, sickle integer, win integer, lose integer, score integer, tuts integer, winrate real, email varchar(50), pp varchar(250))");
	console.log('Created Table : player');
}

function insertQ(){
	client.query("INSERT INTO player(name, pass, level, exp, axe, hammer, sickle, win, lose, score, tuts, winrate, email, pp) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)", ['Kirito', 'asuna', 1, 100, 1, 1, 1, 0, 0, 0, 0, 0, 'kirito@gmail.com','profile1.png']);
	client.query("INSERT INTO player(name, pass, level, exp, axe, hammer, sickle, win, lose, score, tuts, winrate, email, pp) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)", ['Asuna', 'asuna', 1, 100, 1, 1, 1, 0, 0, 0, 0, 0, 'asuna@gmail.com','profile2.png']);
	console.log('Inserted a record.');
}
function search(name){
	var query = client.query("SELECT * FROM player WHERE name = $1", [name]);

	//can stream row results back 1 at a time
	query.on('row', function(row) {
	  console.log(row);
	});
}
initDb();
insertQ();
