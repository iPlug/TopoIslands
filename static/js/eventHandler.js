// SCRIPT FOR GAMEPLAY

$(document).ready(function() {
	$("#uname").focus();
	
	// HOVER ITEM
	$('.item').hover(function(event){
		if(($(this).css('border')=='1px solid rgba(0, 0, 0, 0)') || ($(this)[0].style.border=='1px solid transparent')){
			$(this).css('border','1px solid white');
		}
	},
	function(){
		if(($(this).css('border')=='1px solid rgb(255, 255, 255)') || ($(this)[0].style.border=='1px solid white')){
			$(this).css('border','1px solid transparent');
		}
	});
	
	//-------- login handler
	$('#signin').click( function(){
		uname = $('#uname').val();
		passw = $('#passw').val();
		if(uname!='' && passw!=''){
			if(uname.length<4){
				//alert('Username tidak boleh kurang dari 4 huruf.');
			}else{
				if(passw.length<8){
					//alert('Password tidak boleh kurang dari 8 huruf/angka.');
				}else{
					socket.emit('signin',uname,passw);
				}
			}
		}else{
			//alert('Username dan Password tidak boleh kosong.');
		}
	});
	
	$('#frmSignin').submit(function(e){
		e.preventDefault();
        return false;
	});
	
	$('#signup').click( function(){
		uname = $('#uname').val();
		passw = $('#passw').val();
		
		if(uname!='' && passw!=''){
			if(uname.length<4){
				//alert('Username tidak boleh kurang dari 4 huruf.');
			}else{
				if(passw.length<8){
					//alert('Password tidak boleh kurang dari 8 huruf/angka.');
				}else{
					socket.emit('signup',uname,passw);
				}
			}
		}else{
			//alert('Username dan Password tidak boleh kosong.');
		}
	});
		
	// MAP BUTTON HANDLER

	$("#butBus").click(function(event) {
		$('#sailBoat').css('left','500px');
		$('#sailBoat').css('top','80px');
		if(tutorial==0){
			startIntro();
		}else{
			animateBus();
		}
	  });
	$("#butRing").click(function(event) {
		$('#sailBoat').css('left','700px');
		$('#sailBoat').css('top','360px');
		if(tutorial==3){
			CC=-1;
			hideAll();
			$('#introRing').fadeIn(1000);
			ringHandler2();
		}else{
			animateRing();
		}
	  });
	$("#butStar").click(function(event) {
		$('#sailBoat').css('left','430px');
		$('#sailBoat').css('top','400px');
		if(tutorial==4){
			CC=-1;
			hideAll();
			$('#introStar').fadeIn(1000);
			starHandler();
		}else{
			animateStar();
		}
	  });
	$("#butPvp").click(function(event) {
		$('#sailBoat').css('left','280px');
		$('#sailBoat').css('top','110px');
		doPvp();
	  });
	$("#butCoop").click(function(event) {
		$('#sailBoat').css('left','230px');
		$('#sailBoat').css('top','300px');
		doCoop();
	});
	$("#butCredit").click(function(event) {
		$('#sailBoat').css('left','411px');
		$('#sailBoat').css('top','275px');
		hideAll();
		$('#credit').fadeIn(1000);
	});

	  // UI BUTTON HANDLER
	  $('#butFS').click(function(event){
		var e = document.getElementById("wrapper");  
		if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {  
			RunPrefixMethod(document, "CancelFullScreen"); 
		}  
		else {  
			document.body.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
		}  
	  });
	  
	  $("#butTeman").click(function(event) {
		$("#chatBox").hide();
		$("#friendBox").show();
		
	  });
	  
	  $("#butBarter").click(function(event) {
		$("#friendBox").hide();
		$("#chatBox").show();
	  });
	  
	  $("#butMarket").click(function(event) {
		mayorHandler();
	  });
	  
	  $(".butHome").click(function(event) {
		hideAll();
		$("#map").fadeIn(1000);
		stage.removeAllChildren();
	  });
	// SKILL BUTTON HANDLER
	
	$("#addAxe").click(function(event){
		socket.emit('updateSkill',1);
		$('.infoBox').hide();
		$('#lvlUp').fadeOut(500);
	});
	
	$("#addHam").click(function(event){
		socket.emit('updateSkill',2);
		$('.infoBox').hide();
		$('#lvlUp').fadeOut(500);
	});
	
	$("#addSic").click(function(event){
		socket.emit('updateSkill',3);
		$('.infoBox').hide();
		$('#lvlUp').fadeOut(500);
	});
	
	// TEXT BUTTON NEXT HANDLER
	
	$("#introNext").click(function(event){
		introHandler();
	});
	
	// TUTORIAL HANDLER
	$(".tutsNext").click(function(event){
		tutsHandler();
	});
	
	// TUTORIAL HANDLER END
	
	$("#st2Next").click(function(event){
		woodyHandler();
	});
	
	$("#st3Next").click(function(event){
		shopHandler();
	});
	
	$("#busFinish").click(function(event){
		ringHandler();
	});
	
	$("#ringNext").click(function(event){
		ringHandler2();
	});
	
	$("#ringFinish").click(function(event){
		ringHandler3();
	});
	
	$("#starNext").click(function(event){
		starHandler();
	});
	$("#starFinish").click(function(event){
		starHandler2();
	});
	
	// GAME BUTTON HANDLER
	  	  
	$(".mnSt").click(function(event) {
			startMini();
		  });

	$(".tree").click(function(event) {
			if(axeLvl!=0){
				hidePtr(this,axeLvl);
			}
		});

	$(".stone").click(function(event) {
		if(hamLvl!=0){
			hidePtr(this,hamLvl);
		}
		});
		
	$(".bush").click(function(event) {
		if(sicLvl!=0){
			hidePtr(this,sicLvl);
		}
		});
		
	$(".trap").click(function(event) {
		alert('Kamu memotong pohon yang salah, score mu akan berkurang.');
		gF++;
	});
		
	$("#cont1").click(function(event) {
			socket.emit('updateScoreT',gS);
			preStage2();
		});	
	$("#re1").click(function(event) {
			doStage1();
		});
	$("#cont2").click(function(event) {
			socket.emit('updateScoreT',gS);
			preStage3();
		});	
	$("#re2").click(function(event) {
			doStage2();
		});
	$("#cont3").click(function(event) {
			socket.emit('updateScoreT',gS);
			preRing();
		});	
	$("#re3").click(function(event) {
			doStage3();
		});
	$("#cont4").click(function(event) {
			socket.emit('updateScoreT',gS);
			ringFin();
		});	
	$("#re4").click(function(event) {
			doStageRing();
		});
	$("#cont5").click(function(event) {
			socket.emit('updateScoreT',gS);
			starFin();
		});	
	$("#re5").click(function(event) {
			doStageStar();
		});
	
	// PLAYER TO PLAYER BUTTON HANDLER
	
	$("#aReadyP1").click(function(event) {
		if(rea==1){
			socket.emit('startPVP',1);
		}
	});
	$("#aReadyP2").click(function(event) {
		socket.emit('fReady');
		$('#aReadyP2').attr("disabled", true);
	});
	$("#aExitP1").click(function(event) {
		socket.emit('leaveArena');
		doPvp();		
	});
	$("#aExitP2").click(function(event) {
		socket.emit('leaveArena');
		doPvp();
	});
	$(".butLobi").click(function(event) {
		socket.emit('leaveArena');
		doPvp();
	});
	
	$(".butCLobi").click(function(event) {
		socket.emit('leaveParty');
		doCoop();
	});
	
	$("#cReadyP1").click(function(event) {
		if(rea==1){
			socket.emit('startCoop',1);
		}
	});
	$("#cReadyP2").click(function(event) {
		socket.emit('pReady');
		$('#cReadyP2').attr("disabled", true);
	});
	$("#cExitP1").click(function(event) {
		socket.emit('leaveParty');
		doCoop();		
	});
	$("#cExitP2").click(function(event) {
		socket.emit('leaveParty');
		doCoop();
	});
	$(".butLobi").click(function(event) {
		socket.emit('leaveParty');
		doCoop();
	});
	
	// CHAT SYSTEM HANDLER

	$('#butSend').click( function() {
			var message = $('#txtChat').val();
			$('#txtChat').val('');
			//if message not null
			// tell server to execute 'sendchat' and send along one parameter
			if(message!=''){
				socket.emit('sendchat', message);
				//inserting emoticon
				for(var face in myEmo){
					message=message.replace('/'+ myEmo[face],' <img src=emoticon/' + myEmo[face] + '.gif width=50 height=50>');
				}
				
				//adding chat item
				 $('#chatBoard').append('<b>' + uname + ':</b> ' + message + '<br>');
				 
				//scroll down the chatBox
				$("#chatBoard").animate({ scrollTop: $("#chatBoard").prop("scrollHeight") - $('#chatBoard').height() }, 1);  
			}
			if(newMsg!=-1) newMsg=-1;
		});

		// when the client hits ENTER on their keyboard
		$('#txtChat').keypress(function(e) {
			if(e.which == 13) {
				$(this).blur();
				$('#butSend').focus().click();
				$('#txtChat').focus();
			}
		});
		
		$('#butSendG').click( function() {
			var message = $('#txtChatG').val();
			$('#txtChatG').val('');
			//if message not null
			// tell server to execute 'sendchat' and send along one parameter
			if(message!=''){
				socket.emit('sendchatG', message);
				//inserting emoticon
				for(var face in myEmo){
					message=message.replace('/'+ myEmo[face],' <img src=emoticon/' + myEmo[face] + '.gif width=50 height=50>');
				}
				
				//adding chat item
				 $('#chatBoardG').append('<font color=purple><b>' + uname + ':</b> ' + message + '</font><br />');
				 
				//scroll down the chatBox
				$("#chatBoardG").animate({ scrollTop: $("#chatBoardG").prop("scrollHeight") - $('#chatBoardG').height() }, 1);  
			}
			if(newMsg!=-1) newMsg=-1;
		});

		// when the client hits ENTER on their keyboard
		$('#txtChatG').keypress(function(e) {
			if(e.which == 13) {
				$(this).blur();
				$('#butSendG').focus().click();
				$('#txtChatG').focus();
			}
		});
		
		$('#chatBoard').hover(
			function(){
				if(newMsg!=-1) newMsg=-1;
			}
		);
		// change header for new message
/*		setInterval(function () {  
            if (newMsg==1) {  
                newMsg=0;
				$('title').text('New Message ('+temp+')');
            }else if(newMsg==0){
				newMsg=1;
				$('title').text('Chat:"' + msg + '"');
			}else{
				$('title').text('Chat Box');
			}
        }, 2000);
		*/
		
		$('#kupu').sprite({
			fps: 12, 
			no_of_frames: 6,
			// the following are optional: new in version 0.6...
			start_at_frame: 1
		}).active();
		
		$('.boy').sprite({
			fps: 3, 
			no_of_frames: 4
		}).active();
		
		$('#sailBoat').sprite({
			fps: 3, 
			no_of_frames: 4
		}).active();
		
 });