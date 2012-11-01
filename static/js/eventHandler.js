// SCRIPT FOR GAMEPLAY

$(document).ready(function() {
	$("#uname").focus();
	$('.item').hover(function(event){
		//console.log($(this)[0].style.border);
		if(($(this).css('border')=='1px solid rgba(0, 0, 0, 0)') || ($(this)[0].style.border=='1px solid transparent')){
			$(this).css('border','1px solid white');
		}
	},
	function(){
		if(($(this).css('border')=='1px solid rgb(255, 255, 255)') || ($(this)[0].style.border=='1px solid white')){
			$(this).css('border','1px solid transparent');
		}
	});
	
// declarasi event bangunan

	$(".back").click(function(event) {
		hideAll();
		$(".msgBox").hide();
		$(".infoBox").hide();
		$("#A").show();
	  });

	  
	  $("#bldE").click(function(event) {
	    thaiHandler();
	  });

	  // deklarasi event tombol-tombol ui
	  
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
	  
	  $("#butHome").click(function(event) {
		hideAll();
		$("#A").show();
	  });


// system text
	$("#introNext").click(function(event){
		introHandler();
	});
	
	$("#tutsNext").click(function(event){
		tutsHandler();
	});
	
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
	
// game here
	  	  
$(".mnSt").click(function(event) {
		startMini();
	  });

$(".tree").click(function(event) {
		hidePtr(this,axeLvl);
	});

$(".stone").click(function(event) {
		hidePtr(this,hamLvl);
	});
	
$(".bush").click(function(event) {
		hidePtr(this,sicLvl);
	});
	
$("#cont1").click(function(event) {
		preStage2();
	});	
$("#re1").click(function(event) {
		doStage1();
	});
$("#cont2").click(function(event) {
		preStage3();
	});	
$("#re2").click(function(event) {
		doStage2();
	});
$("#cont3").click(function(event) {
		preRing();
	});	
$("#re3").click(function(event) {
		doStage3();
	});
$("#cont4").click(function(event) {
		ringFin();
	});	
$("#re4").click(function(event) {
		doStageRing();
	});
$("#cont5").click(function(event) {
		starFin();
	});	
$("#re5").click(function(event) {
		doStageStar();
	});
	
//------------------------------------	
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
		
		//-------- login handler
		$('#signin').click( function(){
			uname = $('#uname').val();
			passw = $('#passw').val();
			socket.emit('signin',uname,passw);
		});
 });