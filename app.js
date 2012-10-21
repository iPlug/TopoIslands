var express = require('express');
var app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);

var pg = require('pg'); //native libpq bindings = `var pg = require('pg').native`
//var conString = "postgres://postgres:fariqorik@localhost:5432/postgres";
var conString = 'postgres://nijegwbjqbuihp:my6WheKVlqtm3UHFV4NKgu5nov@ec2-54-243-247-55.compute-1.amazonaws.com:5432/d6imoto5c8i6ej';

var port = process.env.PORT || 5000;
server.listen(port, function() {
  console.log("Listening on " + port);
});

var client = new pg.Client(conString);
client.connect();

app.configure(function(){
	app.use(express.static(__dirname + '/static'));
});

// routing

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/preload.html');
});

app.get('/play', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/library', function (req, res) {
  res.sendfile(__dirname + '/perpus.html');
});

// usernames which are currently connected to the chat
var usernames = {};
var guilds = {};
var count=0;

io.configure(function () { 
  io.set("transports", ["xhr-polling"]); 
  io.set("polling duration", 10); 
});

io.sockets.on('connection', function (socket) {
	console.info('Connection started. ');
	// when the client emits 'sendchat', this listens and executes
	socket.on('sendchat', function (data) {
		// we tell the client to execute 'updatechat' with 2 parameters
		io.sockets.emit('updatechat', socket.username, data);
	});
	
	// when user sign in
	socket.on('signin', function(name, pass){
		var searching = client.query("SELECT * FROM player WHERE name = $1", [name]);
		searching.on('row', function(row) {
			if(pass==row.pass){
				socket.emit('authed',row.guild);
			}else{
				socket.emit('notauthed');
			}
		});
	});
	// when the client emits 'adduser', this listens and executes
	socket.on('adduser', function(username, guild){
		// we store the username in the socket session for this client
		
		socket.username = username;
		socket.room = guild;
		socket.join(guild);
		// add the client's username to the global list
		if(username == 'noob')
		{
			username='noob-'+count;
			socket.username=username;
			usernames[username] = username;
			guilds[username] = guild;
			// echo to client they've connected
			socket.emit('updatechat', 'SERVER', 'Error ID - using ID '+ username);
		}
		else{
			socket.username=username;
			usernames[username] = username;
			guilds[username] = guild;
			socket.emit('updatechat', 'SERVER', username + ' has connected');
		}
		// echo globally (all clients) that a person has connected
		socket.broadcast.emit('updatechat', 'SERVER', username + ' has connected');
		// update the list of users in chat, client-side
		io.sockets.emit('updateusers', usernames, guilds);
		socket.emit('updateinfo', username, "45", "The Furious One", guild);
		count++;
	});

	// when the user disconnects.. perform this
	socket.on('disconnect', function(){
		count--;
		// remove the username from global usernames list
		delete usernames[socket.username];
		delete guilds[socket.username];
		// update list of users in chat, client-side
		io.sockets.emit('removeusers', usernames);
		socket.leave(socket.room);
		// echo globally that this client has left
		socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
	});
});