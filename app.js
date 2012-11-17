var red, blue, reset;
red   = '\u001b[31m';
blue  = '\u001b[36m';
reset = '\u001b[0m';

// usernames which are currently connected to the chat
var arenas = ['Arena-1','Arena-2','Arena-3','Arena-4','Arena-5','Arena-6','Arena-7','Arena-8','Arena-9','Arena-10'];
var arenaC = [0,0,0,0,0,0,0,0,0,0];
var coops = ['Party-1','Party-2','Party-3','Party-4','Party-5','Party-6','Party-7','Party-8','Party-9','Party-10'];
var coopC = [0,0,0,0,0,0,0,0,0,0];
var fighter = new Array;
var leader = new Array;
var imgF = new Array;
var imgL = new Array;

var express = require('express');
var app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);
var sys = require('util');
var pg = require('pg'); //native libpq bindings = `var pg = require('pg').native`
var conString = "postgres://postgres:fariqorik@localhost:5432/postgres";
//var conString = 'postgres://nijegwbjqbuihp:my6WheKVlqtm3UHFV4NKgu5nov@ec2-54-243-247-55.compute-1.amazonaws.com:5432/d6imoto5c8i6ej';

var port = process.env.PORT || 5000;

function cinfo(print){
	console.log(blue + '   info  - ' + print);
}

server.listen(port, function() {
  cinfo(reset + "listening on " + port);
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

/*
io.configure(function () { 
  io.set("transports", ["xhr-polling"]); 
  io.set("polling duration", 10); 
});
*/
io.set('log level', 1);

io.sockets.on('connection', function (socket) {
	cinfo(reset + 'someone connected with us');
	// when the client emits 'sendchat', this listens and executes
	socket.on('sendchatG', function (data) {
		// we tell the client to execute 'updatechat' with 2 parameters
		//io.sockets.emit('updatechat', socket.username, data);
		io.sockets.in(socket.room).emit('updatechatG', socket.username, data);
	});
	
	// ------- DATABASE ---------------
	
	socket.on('signup', function (uname,passw){
		var searching;
		var update;
		searching = client.query("SELECT name FROM player WHERE name = $1", [uname], function(err,result){
			if(err) {
				console.log(err);
			}else {
				if(result.rowCount==0){
					client.query("INSERT INTO player(name, pass, level, exp, axe, hammer, sickle, win, lose, score, tuts) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)", [uname, passw, 1, 0, 1, 1, 1, 0, 0, 0, 0]);
					socket.emit('authed', 1, 0, 1, 1, 1, 0, 0, 0, 0);
					cinfo(red + uname + reset + ' has been born.');		
				}else{
					console.log(result);
					cinfo(red + uname + reset + ' is arleady exist.');
				}
			}
		});
		
	});	

	// when user sign in
	socket.on('signin', function(name, pass){
		
		var searching = client.query("SELECT * FROM player WHERE name = $1", [name]);
		searching.on('row', function(row) {
			if(pass==row.pass){
				socket.username = name;
				socket.room = null;
				socket.pp=row.pp;
				socket.emit('authed', row.level, row.exp, row.axe, row.hammer, row.sickle, row.win, row.lose, row.score, row.tuts, row.pp);
				cinfo(red + name + reset + ' has connected.');
				
			}else{
				socket.emit('notauthed');
			}
		});
		
		// update leaderboard
		
		var lbPVP = client.query("SELECT * FROM player ORDER BY winrate DESC LIMIT 3", function(err,result){
			socket.emit('lbPVP', result);
		});
		
		var lbCoop = client.query("SELECT * FROM player ORDER BY score DESC LIMIT 3", function(err,result){
			socket.emit('lbCoop', result);
		});
		
	});
	
	socket.on('reqRefresh', function(){
		var searching = client.query("SELECT * FROM player WHERE name = $1", [socket.username]);
		searching.on('row', function(row) {
			socket.emit('refreshNow', row.level, row.exp, row.axe, row.hammer, row.sickle, row.win, row.lose, row.score, row.tuts, row.pp);
		});
	});
	
	socket.on('updateScore', function (scr){
		var searching;
		var update;
		searching = client.query("SELECT * FROM player WHERE name = $1", [socket.username]);
			searching.on('row', function(row) {
				update = client.query("UPDATE player SET score = $1 WHERE name = $2", [row.score+scr,socket.username]);
				socket.emit('refreshNow', row.level, row.exp, row.axe, row.hammer, row.sickle, row.win, row.lose, row.score+scr, row.tuts, row.pp);
			});
	});
	
	socket.on('updateScoreT', function (scr){
		
		var searching;
		var update;
		var expPlus=150;
		var level=1;
		var tuts=0;
		searching = client.query("SELECT * FROM player WHERE name = $1", [socket.username]);
			searching.on('row', function(row) {
				tuts=row.tuts;
				update = client.query("UPDATE player SET score = $1 WHERE name = $2", [row.score+scr,socket.username]);
				update = client.query("UPDATE player SET exp = $1 WHERE name = $2", [row.exp+expPlus,socket.username]);
				update = client.query("UPDATE player SET tuts = $1 WHERE name = $2", [row.tuts+1,socket.username]);
				tuts++;
				if(row.exp+expPlus>=15000){
					level=6;
				}else if(row.exp+expPlus>=10000){
					level=5;
				}else if(row.exp+expPlus>=6000){
					level=4;
				}else if(row.exp+expPlus>=3000){
					level=3;
				}else if(row.exp+expPlus>=1000){
					level=2;
				}
				if(row.level!=level){ 
					socket.emit('levelUp',level);
					tuts++;
					update = client.query("UPDATE player SET level = $1 WHERE name = $2", [level,socket.username]);
					update = client.query("UPDATE player SET tuts = $1 WHERE name = $2", [tuts,socket.username]);
				}
				
				socket.emit('refreshNow', level, row.exp+expPlus, row.axe, row.hammer, row.sickle, row.win, row.lose, row.score+scr, tuts, row.pp);
			});
	});
	
	socket.on('updateSkill', function (s){
		var searching;
		var update;
		searching = client.query("SELECT * FROM player WHERE name = $1", [socket.username]);
			searching.on('row', function(row) {
				var axe=row.axe;
				var ham=row.hammer;
				var sic=row.sickle;
				if(s==1){
					update = client.query("UPDATE player SET axe = $1 WHERE name = $2", [row.axe+1,socket.username]);
					axe++;
				}
				if(s==2){
					update = client.query("UPDATE player SET hammer = $1 WHERE name = $2", [row.hammer+1,socket.username]);
					ham++;
				}
				if(s==3){
					update = client.query("UPDATE player SET sickle = $1 WHERE name = $2", [row.sickle+1,socket.username]);
					sic++;
				}
				update = client.query("UPDATE player SET tuts = $1 WHERE name = $2", [row.tuts-1,socket.username]);
				socket.emit('refreshNow', row.level, row.exp, axe, ham, sic, row.win, row.lose, row.score, row.tuts-1, row.pp);
			});
	});
	
	socket.on('winPVP', function () {
		var searching;
		var update;
		var expPlus=150;
		var level=1;
		searching = client.query("SELECT * FROM player WHERE name = $1", [socket.username]);
		searching.on('row', function(row) {
			if(row.exp>15000) expPlus=0;
			
			update = client.query("UPDATE player SET win = $1 WHERE name = $2", [row.win+1,socket.username]);
			update = client.query("UPDATE player SET exp = $1 WHERE name = $2", [row.exp+expPlus,socket.username]);
			
			if(row.win+row.lose+1>5){
				var winrate = row.win/row.win+row.lose+1;
				update = client.query("UPDATE player SET winrate = $1 WHERE name = $2", [winrate,socket.username]);
			}
			
			if(row.exp+expPlus>=15000){
				level=6;
			}else if(row.exp+expPlus>=10000){
				level=5;
			}else if(row.exp+expPlus>=6000){
				level=4;
			}else if(row.exp+expPlus>=3000){
				level=3;
			}else if(row.exp+expPlus>=1000){
				level=2;
			}
			if(row.level!=level){ 
				socket.emit('levelUp',level);
				update = client.query("UPDATE player SET level = $1 WHERE name = $2", [level,socket.username]);
				update = client.query("UPDATE player SET tuts = $1 WHERE name = $2", [row.tuts+1,socket.username]);
			}

			socket.emit('refreshNow', level, row.exp+expPlus, row.axe, row.hammer, row.sickle, row.win+1, row.lose, row.score, row.tuts, row.pp);
			cinfo(red + socket.username + reset + ' has win from Arena');
		});
		
		var lbPVP = client.query("SELECT * FROM player ORDER BY winrate DESC LIMIT 3", function(err,result){
			socket.emit('lbPVP', result);
		});
		
	});
	
	socket.on('losePVP', function () {
		var searching;
		var update;
		var expPlus=50;
		var level=1;
		searching = client.query("SELECT * FROM player WHERE name = $1", [socket.username]);
		searching.on('row', function(row) {
		
			if(row.exp>15000) expPlus=0;
			update = client.query("UPDATE player SET lose = $1 WHERE name = $2", [row.lose+1,socket.username]);
			update = client.query("UPDATE player SET exp = $1 WHERE name = $2", [row.exp+expPlus,socket.username]);
			
			if(row.win+row.lose+1>5){
				var winrate = row.win/row.win+row.lose+1;
				update = client.query("UPDATE player SET winrate = $1 WHERE name = $2", [winrate,socket.username]);
			}
			
			if(row.exp+expPlus>=15000){
				level=6;
			}else if(row.exp+expPlus>=10000){
				level=5;
			}else if(row.exp+expPlus>=6000){
				level=4;
			}else if(row.exp+expPlus>=3000){
				level=3;
			}else if(row.exp+expPlus>=1000){
				level=2;
			}
			if(row.level!=level){ 
				socket.emit('levelUp',level);
				update = client.query("UPDATE player SET level = $1 WHERE name = $2", [level,socket.username]);
				update = client.query("UPDATE player SET tuts = $1 WHERE name = $2", [row.tuts+1,socket.username]);
			}
			
			socket.emit('refreshNow', level, row.exp+expPlus, row.axe, row.hammer, row.sickle, row.win, row.lose+1, row.score, row.tuts, row.pp);
			cinfo(red + socket.username + reset + ' has lose from Arena');
		});
		
		var lbPVP = client.query("SELECT * FROM player ORDER BY winrate DESC LIMIT 3", function(err,result){
			socket.emit('lbPVP', result);
		});
	});
	
	socket.on('endCoop', function (scr){
		var searching;
		var update;
		var expPlus=100;
		var level=1;
		searching = client.query("SELECT * FROM player WHERE name = $1", [socket.username]);
			searching.on('row', function(row) {
				if(row.exp>15000) expPlus=0;
				update = client.query("UPDATE player SET score = $1 WHERE name = $2", [row.score+scr,socket.username]);
				update = client.query("UPDATE player SET exp = $1 WHERE name = $2", [row.exp+expPlus,socket.username]);
			if(row.exp+expPlus>=15000){
				level=6;
			}else if(row.exp+expPlus>=10000){
				level=5;
			}else if(row.exp+expPlus>=6000){
				level=4;
			}else if(row.exp+expPlus>=3000){
				level=3;
			}else if(row.exp+expPlus>=1000){
				level=2;
			}
			if(row.level!=level){ 
				socket.emit('levelUp',level);
				update = client.query("UPDATE player SET level = $1 WHERE name = $2", [level,socket.username]);
				update = client.query("UPDATE player SET tuts = $1 WHERE name = $2", [row.tuts+1,socket.username]);
			}
				socket.emit('refreshNow', level, row.exp+expPlus, row.axe, row.hammer, row.sickle, row.win, row.lose, row.score+scr, row.tuts, row.pp);
			});
			
			var lbCoop = client.query("SELECT * FROM player ORDER BY score DESC LIMIT 3", function(err,result){
				socket.emit('lbCoop', result);
			});
	});
	
	// ------- FEATURED ---------
	
	socket.on('sendchat', function (data) {
		// we tell the client to execute 'updatechat' with 2 parameters
		io.sockets.emit('updatechat', socket.username, data);
	});
	
	
	// LOBBY AREA
	
	socket.on('roomReq', function (type){
		if(type==0){
			socket.emit('updateArena',arenas,arenaC);
		}else{
			socket.emit('updateParty',coops,coopC);
		}
	});
	
	// PVP AREA
	
	socket.on('joinArena', function (room) {
		var i=arenas.indexOf(room);
		arenaC[i]++;
		if(arenaC[i]<3){
			socket.join(room);
			socket.room = room;
			if(arenaC[i]==1){
				fighter[i]=socket.username;
				imgF[i]=socket.pp;
			}
			cinfo(red + socket.username + reset + ' has joined ' + room);
			socket.emit('roomOk',arenaC[i],fighter[i],imgF[i],0);
			socket.broadcast.to(socket.room).emit('newFighter',socket.username, socket.pp);
		}else{
			arenaC[arenas.indexOf(socket.room)]--;
			socket.emit('roomFail');
		}
	});
	
	socket.on('joinParty', function (room) {
		var i=coops.indexOf(room);
		coopC[i]++;
		if(coopC[i]<3){
			socket.join(room);
			socket.room = room;
			if(coopC[i]==1){
				leader[i]=socket.username;
				imgL[i]=socket.pp;
			}
			cinfo(red + socket.username + reset + ' has joined ' + room);
			socket.emit('roomOk',coopC[i],leader[i],imgL[i],1);
			socket.broadcast.to(socket.room).emit('newMember',socket.username, socket.pp);
		}else{
			coopC[coops.indexOf(socket.room)]--;
			socket.emit('roomFail');
		}
	});
	
	
	
	socket.on('leaveArena', function () {
		if(socket.room!=null){
			socket.broadcast.to(socket.room).emit('leaveRoom');
			socket.leave(socket.room);
			arenaC[arenas.indexOf(socket.room)]--;
			cinfo(red + socket.username + reset + ' has leaved ' + socket.room);
			socket.emit('updateArena',arenas,arenaC);
			socket.room = null;
		}
	});
	
	socket.on('leaveParty', function () {
		if(socket.room!=null){
			socket.broadcast.to(socket.room).emit('leaveParty');
			socket.leave(socket.room);
			coopC[coops.indexOf(socket.room)]--;
			cinfo(red + socket.username + reset + ' has leaved ' + socket.room);
			socket.emit('updateParty',coops,coopC);
			socket.room = null;
		}
	});
	
	socket.on('updateFighter', function () {
		fighter[arenas.indexOf(socket.room)]=socket.username;
		imgF[arenas.indexOf(socket.room)]=socket.pp;
		cinfo(red + socket.username + reset + ' be the leader of ' + socket.room);
	});
	
	socket.on('fReady', function () {
		socket.broadcast.to(socket.room).emit('fReady',socket.username);
	});
	
	socket.on('updateLeader', function () {
		leader[coops.indexOf(socket.room)]=socket.username;
		imgL[coops.indexOf(socket.room)]=socket.pp;
		cinfo(red + socket.username + reset + ' be the leader of ' + socket.room);
	});
	
	socket.on('pReady', function () {
		socket.broadcast.to(socket.room).emit('pReady',socket.username);
	});
	
	socket.on('startPVP', function (num) {
		io.sockets.in(socket.room).emit('startPVP',num);
	});
	
	socket.on('startCoop', function (num) {
		io.sockets.in(socket.room).emit('startCoop',num);
	});
	
	socket.on('destroy', function (id,sharpLvl) {
		socket.broadcast.to(socket.room).emit('destroy',id,sharpLvl);
	});
	
	// when the user disconnects.. perform this
	socket.on('disconnect', function(){
		// remove the username from global usernames list
		if(socket.username!=undefined){
			socket.broadcast.to(socket.room).emit('leaveRoom');
			socket.broadcast.to(socket.room).emit('leaveParty');
			if(socket.room!=null){
				socket.leave(socket.room);
				arenaC[arenas.indexOf(socket.room)]--;
				coopC[coops.indexOf(socket.room)]--;
				cinfo(red + socket.username + reset + ' has leaved ' + socket.room);
				socket.emit('updateArena',arenas,arenaC);
				socket.emit('updateParty',coops,coopC);
				socket.room = null;
			}
			cinfo(red + socket.username + reset + ' has disconnected');
		}
		// echo globally that this client has left
		//socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
	});
	
	
	// fungsi yang tidak d pake
	socket.on('autoJoin',function(type){
		var room;
		for(var i=0;i<arenas.length;i++){
			// cari room yang masih kosong atau belum penuh
			if(arenaC[i]<2){
				// jika ada, masuk ke room
				room=arenas[i];
				arenaC[i]++;
				if(arenaC[i]<3){
					socket.join(room);
					socket.room = room;
					if(arenaC[i]==1) fighter[i]=socket.username;
					cinfo(red + socket.username + reset + ' has joined ' + room);
					socket.emit('roomOk',arenaC[i],fighter[i]);
					socket.broadcast.to(socket.room).emit('newFighter',socket.username);
				}else{
					arenaC[i]--;
					socket.emit('roomFail');
				}
				return;
			}
			// jika full semua, buat room baru
			if(i==arenas.length-1){
				arenas[i+1]='Arena-' + (i+2);
				arenaC[i+1]=1;
				room=arenas[i+1];
				if(arenaC[i+1]<3){
					socket.join(room);
					socket.room = room;
					if(arenaC[i+1]==1) fighter[i+1]=socket.username;
					cinfo(red + socket.username + reset + ' has joined ' + room);
					socket.emit('roomOk',arenaC[i+1],fighter[i+1]);
					socket.broadcast.to(socket.room).emit('newFighter',socket.username);
				}else{
					arenaC[i+1]--;
					socket.emit('roomFail');
				}
				return;
			}
		}
	});
});