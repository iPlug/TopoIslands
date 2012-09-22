// SCRIPT FOR GAMEPLAY

$(document).ready(function() {
	$("#uname").focus();

	// setting tentang hover menghover
	
	$(".hvr").hover(function(e){
			clearTimeout(popTimer);
    
		    popTimer = setTimeout(function(){
		        $('#popup').fadeOut(900);
		    }, 4000);
		    
		    $('#popup').fadeIn(900);
			
			$('#popup').css('top', e.pageY + 20)
			.css('left', e.pageX + 20)
			.appendTo('body');
			
        },function(){
            $('#popup').fadeOut(500)
        });
	

	$('.hvr').mousemove(function(e) {
		$("#popup").css('top', e.pageY + 20).css('left', e.pageX + 20);
		//$('#popup').fadeOut(1000)
	});

	
		
	/*

	$("#bldA").hover(function(){
	  $("#bldA").css("background-image","url(media/image/building/icehome1h.png)");
	  },function(){
	  $("#bldA").css("background-image","url(media/image/building/icehome1.png)");
	});
	
	$("#bldB").hover(function(){
	  $("#bldB").css("background-image","url(media/image/building/store1h.png)");
	  },function(){
	  $("#bldB").css("background-image","url(media/image/building/store1.png)");
	});
*/

// declarasi event bangunan

	$(".back").click(function(event) {
		hideAll();
		$("#A").css("display","inline");
	  });

	  $("#bldA").click(function(event) {
	    hideAll();
	    $("#B").css("display","inline");
		$("#B1").css("display","inline");
		fillText('1', 'Woody', 'Cuaca yang bagus untuk menebang pohon, oh ada apa ' + uname + '?');
		});
	  
	  $("#bldB").click(function(event) {
	    hideAll();
		$("#B").css("display","inline");
		$("#B2").css("display","inline");
		fillText('2', 'Doug', 'Apa ada yang bisa ku bantu, ' + uname + '?');
	  });
	  
	  $("#bldC").click(function(event) {
	    hideAll();
		$("#B").css("display","inline");
		$("#B3").css("display","inline");
		fillText('3', 'Saibara', 'Hai ' + uname + ', apa yang kau butuhkan dariku?');
	  });
	  
	  $("#bldD").click(function(event) {
	    hideAll();
		$("#B").css("display","inline");
		$("#B4").css("display","inline");
		fillText('4', 'Gourmetchef', 'Hari ini sangat panas, apa bisnismu hari ini ' + uname + '?');
	  });
	  
	  $("#bldE").click(function(event) {
	    hideAll();
		$("#B").css("display","inline");
		$("#B5").css("display","inline");
		fillText('5', 'Thai', 'Apa yang kau lakukan di kantor ku, ' + uname + '?');
	  });
	  
	  $("#butTeman").click(function(event) {
		//$("#chatBox").css("display","none");
		$("#friendBox").css("display","inline");
		
	  });
	  
	  $("#butBarter").click(function(event) {
		$("#friendBox").css("display","none");
		$("#chatBox").css("display","inline");
	  });
	  
	  $("#butMarket").click(function(event) {
		hideAll();
		$("#C").css("display","inline");
	  });
	  
	  $("#butHome").click(function(event) {
		hideAll();
		$("#A").css("display","inline");
	  });

// ------------------

	  
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
				 $('#chatBoard').append('<b>' + uname + '('+time.getHours()+':'+time.getMinutes()+')'+':</b> ' + message + '<br>');
				 
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
			guild = $('#guild').val();
			Signed();
		});
 });