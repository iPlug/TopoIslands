//	SOCKET.IO CONFIGURATION SCRIPT
	
	// on connection to server, ask for user's name with an anonymous callback
	socket.on('connect', function(){
		// call the server-side function 'adduser' and send one parameter (value of prompt)
		//uname=prompt("What's your name?");
		/*
		if((uname=='')||(uname==null)){
		socket.emit('adduser', 'noob');
		}else{
		socket.emit('adduser', uname);
		}
		*/
	});

	// listener, whenever the server emits 'updatechat', this updates the chat body
	socket.on('updatechat', function (username, data) {
		if(username!=uname){
			//set new message = true
			newMsg=1;

			temp=username;
			msg=data;	
			
			//inserting emoticon
			for(var face in myEmo){
				data=data.replace('/'+ myEmo[face],' <img src=emoticon/' + myEmo[face] + '.gif width=50 height=50>');
			}
			
			//adding chat item
			 //$('#chatBoard').append('<b>'+username + ' ('+time.getHours()+':'+time.getMinutes()+')'+':</b> ' + data + '<br>');
			 $('#chatBoard').append('<b>'+username + ':</b> ' + data + '<br>');
			//scroll down the chatBox
			$("#chatBoard").animate({ scrollTop: $("#chatBoard").prop("scrollHeight") - $('#chatBoard').height() }, 1);  
			//beepOne.play();	
		}
		
	});
	
	socket.on('updatechatG', function (username, data) {
		if(username!=uname){
			//set new message = true
			newMsg=1;

			temp=username;
			msg=data;	
			
			//inserting emoticon
			for(var face in myEmo){
				data=data.replace('/'+ myEmo[face],' <img src=emoticon/' + myEmo[face] + '.gif width=50 height=50>');
			}
			
			//adding chat item
			 $('#chatBoardG').append('<font color=purple><b>'+username + ':</b> ' + data + '</font><br>');
			 
			//scroll down the chatBox
			$("#chatBoardG").animate({ scrollTop: $("#chatBoardG").prop("scrollHeight") - $('#chatBoardG').height() }, 1);  
			//beepOne.play();	
			
			//adding chat item
			 $('#chatBoard').append('<font color=purple><b>'+username + ':</b> ' + data + '</font><br>');
			 
			//scroll down the chatBox
			$("#chatBoard").animate({ scrollTop: $("#chatBoard").prop("scrollHeight") - $('#chatBoard').height() }, 1);  
			//beepOne.play();	
		}
		
	});

	// listener, whenever the server emits 'updateusers', this updates the username list
	socket.on('updateusers', function(data, dtGuild) {
		$('#friendBoard').empty();
		$.each(data, function(key, value) {
			if((dtGuild[key]==guild) && (dtGuild[key]!="null") && (key!=uname)){
				$('#friendBoard').append('<div class="btn btn-info" style="width:210px;margin-top:3px;margin-left:3px;">' + key + '</div>');
			}
			console.log('Username : ' + key + ' , Guild : ' + dtGuild[key]);
		});
	});
	
	socket.on('updateinfo', function(name, level, title, guild) {
	if(name==uname){
		$("#labName").html(name + " - Level " + level);
		$("#labTitle").html(title);
		$("#labGuild").html(guild);
	}
	});
	
	socket.on('authed', function(g){
		guild = g;
		Signed();
	});
	
	socket.on('notauthed', function(g){
		$('#warnBoard').html('Username / Password Anda Salah');
		$('#uname').focus();
	});
