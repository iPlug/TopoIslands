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
            $('#popup').fadeOut(100)
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
		$("#A").show();
	  });

	  $("#bldA").click(function(event) {
	    woodyHandler();
		});
	  
	  $("#bldB").click(function(event) {
	    dougHandler();
	  });
	  
	  $("#bldC").click(function(event) {
	    saiHandler();
	  });
	  
	  $("#bldD").click(function(event) {
	    gourHandler();
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

	  //----------- quest system here
	  
	  //----------- Mayor Session
	  
	  $("#aMay1").click(function(event) {
		ansHandler('6', aMay1[ConvCount]);	
	  });
	  
	  $("#aMay2").click(function(event) {
		ansHandler('6', aMay2[ConvCount]);	
	  });
	  
	  $("#aMay3").click(function(event) {
		ansHandler('6', aMay3[ConvCount]);	
	  });
	  
	  // ------------ Woody Session
	  
	  $("#aWoo1").click(function(event) {
		ansHandler('1', aMay1[ConvCount]);	
	  });
	  
	  $("#aWoo2").click(function(event) {
		ansHandler('1', aMay2[ConvCount]);	
	  });
	  
	  $("#aWoo3").click(function(event) {
		ansHandler('1', aMay3[ConvCount]);	
	  });
	  
	  $("#aWoo4").click(function(event) {
		preMn('1');
	  });
	  
	  
	  
	  //------------- Doug Session
	  
	  $("#aD1").click(function(event){
		ansHandler('2', aMay1[ConvCount]);	
	  });
	  
	  $("#aD2").click(function(event){
		ansHandler('2', aMay2[ConvCount]);	
	  });
	  
	  $("#aD3").click(function(event){
		ansHandler('2', aMay3[ConvCount]);	
	  });
	  
	  //------------- Saibara Session
	  
	  $("#aS1").click(function(event){
		ansHandler('3', aMay1[ConvCount]);	
	  });
	  
	  $("#aS2").click(function(event){
		ansHandler('3', aMay2[ConvCount]);	
	  });
	  
	  $("#aS3").click(function(event){
		ansHandler('3', aMay3[ConvCount]);	
	  });
	  
	  //------------- Gourmetchef Session
	  
	  $("#aG1").click(function(event){
		ansHandler('4', aMay1[ConvCount]);	
	  });
	  
	  $("#aG2").click(function(event){
		ansHandler('4', aMay2[ConvCount]);	
	  });
	  
	  $("#aG3").click(function(event){
		ansHandler('4', aMay3[ConvCount]);	
	  });
	  
	  //------------- Thai Session
	  
	  $("#aT1").click(function(event){
		ansHandler('5', aMay1[ConvCount]);	
	  });
	  
	  $("#aT2").click(function(event){
		ansHandler('5', aMay2[ConvCount]);	
	  });
	  
	  $("#aT3").click(function(event){
		ansHandler('5', aMay3[ConvCount]);	
	  });
	  
// ------------------

// --------- mini game ----------
//------ wood session ---------
$("#wAmbil").click(function(event) {
		mnAmbil('w');
	  });

$("#wJual").click(function(event) {
		mnJual('w');
	  });

$("#woodSt").click(function(event) {
		startMini();
	  });

$(".ptr1").click(function(event) {
		hidePtr('w',1);
	});

$(".ptr2").click(function(event) {
		hidePtr('w',2);
	});

$(".ptr3").click(function(event) {
		hidePtr('w',3);
	});

$(".ptr4").click(function(event) {
		hidePtr('w',4);
	});

$(".ptr5").click(function(event) {
		hidePtr('w',5);
	});

$(".ptr6").click(function(event) {
		hidePtr('w',6);
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