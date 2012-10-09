var pg = require('pg'); //native libpq bindings = `var pg = require('pg').native`
var conString = 'postgres://nijegwbjqbuihp:my6WheKVlqtm3UHFV4NKgu5nov@ec2-54-243-247-55.compute-1.amazonaws.com:5432/d6imoto5c8i6ej';
//var conString = "tcp://postgres:fariqorik@localhost:5432/postgres";
//postgres://username:password@host:port/database_name

var client = new pg.Client(conString);
client.connect();

//queries are queued and executed one after another once the connection becomes available
/*
client.query("CREATE TABLE beatles(name varchar(10), height integer, birthday timestamptz)");
client.query("INSERT INTO beatles(name, height, birthday) values($1, $2, $3)", ['Ringo', 67, new Date(1945, 11, 2)]);
client.query("INSERT INTO beatles(name, height, birthday) values($1, $2, $3)", ['John', 68, new Date(1944, 10, 13)]);
*/
client.query("DROP TABLE beatles");
console.log('Beatles deleted');
client.query("CREATE TABLE user(name varchar(10), pass varchar(10), guild varchar(10))");
console.log('Created Table : user');
client.query("INSERT INTO beatles(name, pass, guild) values($1, $2, $3)", ['Kirito', 'asuna', 'Solaris']);
client.query("INSERT INTO beatles(name, pass, guild) values($1, $2, $3)", ['Asuna', 'kirito', 'Solaris']);
console.log('Inserted 2 record.');

//fired after last row is emitted
query.on('end', function() { 
  client.end();
});