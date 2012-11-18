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
	
	socket.on('uStat', function(i){
		if(i==0){
			$('#signBox').show();
			$('#loginBox').hide();
			$('#signName').val(uname);
			$('#signPass').val(passw);
		}else{
			alert('Username sudah ada, coba username yang lain.');
		}
	});
	
	socket.on('refreshNow', function (level, exp, axe, hammer, sickle, win, lose, score, tuts, pp){
		refreshNow(level, exp, axe, hammer, sickle, win, lose, score, tuts, pp);
	});
	
	socket.on('lbPVP', function(dPVP){
		$('#lbPVP').html('<br /><b><center>King of PVP</b></center>');
		
		for(var i=0;i<dPVP.rowCount;i++){
			$('#lbPVP').append(' [ ' + (i+1) + ' ] ' + dPVP.rows[i].name + ' - WinRate : ' + dPVP.rows[i].winrate + '%<br />');
		}
	});

	socket.on('lbCoop', function(dCOOP){
		$('#lbCoop').html('<br /><b><center>King of Coop</b></center>');
		
		for(var i=0;i<dCOOP.rowCount;i++){
			$('#lbCoop').append(' [ ' + (i+1) + ' ] ' + dCOOP.rows[i].name + ' - Score : ' + dCOOP.rows[i].score + '<br />');
		}
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
			
			/*
			//adding chat item
			 $('#chatBoard').append('<font color=purple><b>'+username + ':</b> ' + data + '</font><br>');
			 
			//scroll down the chatBox
			$("#chatBoard").animate({ scrollTop: $("#chatBoard").prop("scrollHeight") - $('#chatBoard').height() }, 1);  
			//beepOne.play();	
			*/
		}
		
	});
	
	socket.on('authed', function(level, exp, axe, hammer, sickle, win, lose, score, tuts, pp){
		refreshNow(level, exp, axe, hammer, sickle, win, lose, score, tuts, pp);
		Signed();
	});
	
	socket.on('notauthed', function(g){
		alert('Username tidak cocok dengan Password. Silahkan periksa kembali Username dan Password Anda.');
	});
	
	socket.on('notsigned', function(g){
		alert('Username Anda belum terdaftar. Silahkan klik tombol daftar.');
	});
	
	socket.on('levelUp', function(){
		$('#lvlUp').show();
	});
	
	socket.on('updateArena', function(rooms, count){
		$('.roomList').html('');
		$.each(rooms, function(key, value) {
			if(value!=null){
				if(count[key]<2){
					$('.roomList').append('<div class=roomItem> Room :' + value + ' / Isi :' + count[key] + ' <a class="btn btn-small btn-inverse" href="#" onclick="joinArena(\''+value+'\')">Masuk</a>' + '</div>' );
				}else{
					$('.roomList').append('<div class=roomItem> Room :' + value + ' / Isi :' + count[key] + ' <a class="btn btn-small btn-disabled" disabled>Penuh</a> </div>' );
				}
			}
		});
	});
	
	socket.on('updateParty', function(rooms, count){
		$('.roomList').html('');
		$.each(rooms, function(key, value) {
			if(value!=null){
				if(count[key]<2){
					$('.roomList').append('<div class=roomItem> Room :' + value + ' / Isi :' + count[key] + ' <a class="btn btn-small btn-inverse" href="#" onclick="joinParty(\''+value+'\')">Masuk</a>' + '</div>' );
				}else{
					$('.roomList').append('<div class=roomItem> Room :' + value + ' / Isi :' + count[key] + ' <a class="btn btn-small btn-disabled" disabled>Penuh</a> </div>' );
				}
			}
		});
	});
	
	socket.on('roomOk', function(num,p1,imgE,type){
		rea=0;
		fighter=num;
		console.log('Success to enter room');
		hideAll();
		if(type==0){
			$('#arenaRoom').fadeIn(1000);
			if(num==1){
				$('.nameP1').html(uname);
				$('.imgP1').html('<img src=' + imgP + ' width=180px height=200px />');
				$('.nameP2').html('Kosong');
				$('.imgP2').html('<img width=180px height=200px />');
				$('#aReadyP2').html('BELUM SIAP');
				$('#aReadyP1').html('MULAI');
				$('#aReadyP1').attr("disabled", true);
				$('#aExitP1').show();
				$('#aReadyP2').attr("disabled", true);
				$('#aExitP2').hide();
			}else{
				$('.nameP1').html(p1);
				$('.imgP1').html('<img src=/img/profile/' + imgE + ' width=180px height=200px />');
				$('.nameP2').html(uname);
				$('.imgP2').html('<img src=' + imgP + ' width=180px height=200px />');
				$('#aReadyP1').html('SIAP');
				$('#aReadyP2').html('SIAP');
				$('#aReadyP1').attr("disabled", true);
				$('#aExitP1').hide();
				$('#aReadyP2').attr("disabled", false);
				$('#aExitP2').show();
			}
		}else{
			$('#coopRoom').fadeIn(1000);
			if(num==1){
				$('.nameP1').html(uname);
				$('.imgP1').html('<img src=' + imgP + ' width=180px height=200px />');
				$('.nameP2').html('Kosong');
				$('.imgP2').html('<img width=180px height=200px />');
				$('#cReadyP2').html('BELUM SIAP');
				$('#cReadyP1').html('MULAI');
				$('#cReadyP1').attr("disabled", true);
				$('#cExitP1').show();
				$('#cReadyP2').attr("disabled", true);
				$('#cExitP2').hide();
			}else{
				$('.nameP1').html(p1);
				$('.imgP1').html('<img src=/img/profile/' + imgE + ' width=180px height=200px />');
				$('.nameP2').html(uname);
				$('.imgP2').html('<img src=' + imgP + ' width=180px height=200px />');
				$('#cReadyP1').html('SIAP');
				$('#cReadyP2').html('SIAP');
				$('#cReadyP1').attr("disabled", true);
				$('#cExitP1').hide();
				$('#cReadyP2').attr("disabled", false);
				$('#cExitP2').show();
			}
		}
	});
	
	socket.on('roomFail', function(){
		console.log('Fail to enter room');
	});
	
	socket.on('leaveRoom', function(){
		rea=0;
		$('.nameP1').html(uname);
		$('.imgP1').html('<img src=' + imgP + ' width=180px height=200px />');
		$('.nameP2').html('Kosong');
		$('.imgP2').html('<img width=180px height=200px />');
		$('#aReadyP1').attr("disabled", true);
		$('#aExitP1').show();
		$('#aReadyP2').attr("disabled", true);
		$('#aReadyP2').html('BELUM SIAP');
		$('#aExitP2').hide();
		if(fighter==2){
			socket.emit('updateFighter');
		}
	});
	
	socket.on('newFighter', function(username, imgE){
			rea=0;
			$('.nameP1').html(uname);
			$('.nameP2').html(username);
			$('#aReadyP2').html('BELUM SIAP');
			$('#aReadyP1').attr("disabled", true);
			$('#aExitP1').show();
			$('#aReadyP2').attr("disabled", true);
			$('#aExitP2').hide();
			$('.imgP2').html('<img src=/img/profile/' + imgE + ' width=180px height=200px />');
	});
	
	socket.on('fReady', function(username){
			rea=1;
			$('#aReadyP2').html('SIAP');
			$('#aReadyP1').attr("disabled", false);
	});
	
	socket.on('leaveParty', function(){
		rea=0;
		$('.nameP1').html(uname);
		$('.imgP1').html('<img src=' + imgP + ' width=180px height=200px />');
		$('.nameP2').html('Kosong');
		$('.imgP2').html('<img width=180px height=200px />');
		$('#cReadyP1').attr("disabled", true);
		$('#cExitP1').show();
		$('#cReadyP2').attr("disabled", true);
		$('#cReadyP2').html('BELUM SIAP');
		$('#cExitP2').hide();
		if(fighter==2){
			socket.emit('updateLeader');
		}
	});
	
	socket.on('newMember', function(username, imgE){
			rea=0;
			$('.nameP1').html(uname);
			$('.nameP2').html(username);
			$('#cReadyP2').html('BELUM SIAP');
			$('#cReadyP1').attr("disabled", true);
			$('#cExitP1').show();
			$('#cReadyP2').attr("disabled", true);
			$('#cExitP2').hide();
			$('.imgP2').html('<img src=/img/profile/' + imgE + ' width=180px height=200px />');
	});
	
	socket.on('pReady', function(username){
			rea=1;
			$('#cReadyP2').html('SIAP');
			$('#cReadyP1').attr("disabled", false);
	});
	
	socket.on('startPVP', function(num){
		doArena(num);
	});
	
	socket.on('startCoop', function(num){
		doParty(num);
	});
	
	socket.on('destroy', function(id,sharpLvl){
		console.log(id);
		$('#' + id).css("border","1px blue solid");
		ptrTimer = setTimeout(function(){
			bag.play();
			eS++;
			gS++;
			$('#' + id).fadeOut(800);
		},sharpLvl*1000);
	});
	
	socket.on('levelUp', function(lvl){
		doLevelUp(lvl);
	});
	
	
	
	
	