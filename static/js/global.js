function hideAll(){
		$("#A").hide();
		$("#B").hide();
		$("#C").hide();
		$("#D").hide();
		
		$("#B1").hide();
		$("#B2").hide();
		$("#B3").hide();
		$("#B4").hide();
		$("#B5").hide();
		$("#B6").hide();
		
		$("#D1").hide();
		$("#D2").hide();
		$("#D3").hide();
		
	}
	
function Signed(){
		if((uname!='')&&(uname!=null)){
			console.log(uname);
			socket.emit('adduser', uname, guild);
			
			//prepare the conversation
			initConv();
			
			//prepare the stage
			hideAll();
			$('#wrapper').show();
			$('#loginBox').hide();
			resetR();
			
			//$('#A').show();
			//startTutorial();
			//$('.ansBox').hide();
			
			
			//$('#B').show();
			//$('#B6').show();
			//fillText('6', 'Thomas', May[ConvCount]);
			
			hideAll();
			$("#D").show();
			$("#D1").show();
		}else{
			
		}
	}
	
function startTutorial(){
		hideAll();
		$('#C').show();
		$('#txtTut').hide();
		$('#txtTut').html('Bangun... Bangunlah... Kau tidak apa-apa....?');
		clearTimeout(popTimer);    
		$('#txtTut').fadeIn(900);
		popTimer = setTimeout(function(){
			$('#txtTut').fadeOut(900);
			popTimer = setTimeout(function(){
				$('#txtTut').html('Oh, dia pingsan... Cepat bawa dia ke rumahku...');
			}, 1000);
			$('#txtTut').fadeIn(900);
			
			popTimer = setTimeout(function(){
				$('#txtTut').fadeOut(900);
				popTimer = setTimeout(function(){
					$('#txtTut').html('Dua Hari Kemudian...');
					$('#txtTut').fadeIn(3000);
				}, 5000);
				
				popTimer = setTimeout(function(){
					$('#txtTut').fadeOut(3000);
					popTimer = setTimeout(function(){
						popTimer = setTimeout(function(){
							fillText('6', 'Thomas', May[ConvCount]);
						}, 2100);
						$('#C').fadeOut(900);
						$('#wrapper').hide();
						$('#wrapper').fadeIn(2000);
						$('#B').show();
						$('#B6').show();
						cleanTxt('6');
					}, 10000);
				}, 10000);	
			}, 6000);
		}, 6000);
	}