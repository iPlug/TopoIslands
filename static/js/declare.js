//	DECLARE VARIABLE AND FUNCTION
	//	var socket = io.connect('http://10.250.214.130');
	var socket = io.connect(window.location.hostname);
	var time= new Date();
	var popTimer;
	var newMsg=-1;
	var temp='';
	var msg='';
	var message='';
	var uname='';
	var guild='';
	var myEmo = new Array(
    'smile',
    'sad',
    'cry',
	'XD',
	'think',
	'what',
	'nono',
	'studyhard',
	'wkwk',
	'kiss',
	'lol'
	);
	
	function hideAll(){
		$("#A").hide();
		$("#B").hide();
		$("#C").hide();
		
		$("#B1").hide();
		$("#B2").hide();
		$("#B3").hide();
		$("#B4").hide();
		$("#B5").hide();
		$("#B6").hide();
		
	}
	
	function Signed(){
		if((uname!='')&&(uname!=null)){
			console.log(uname);
			socket.emit('adduser', uname, guild);
			hideAll();
			$('#A').show();
			$('#wrapper').show();
			$('#loginBox').hide();
			startTutorial();
		}else{
			
		}
	}
	
	function cleanTxt(no){
		switch(no){
			case "1":
				$("#txtWood").html('');
			break;
			case "2":
				$("#txtHome").html('');
			break;
			case "3":
				$("#txtMine").html('');
			break;
			case "4":
				$("#txtShop").html('');
			break;
			case "5":
				$("#txtRock").html('');
			break;
			case "6":
				$("#txtMayor").html('');
			break;
		}
	}
	
	function fillNow(no, name, text){
		switch(no){
			case "1":
				$("#txtWood").html('<span class="label label-important">' + name + '</span><br /><p class="triangle-border left">' + text + '</p>');
			break;
			case "2":
				$("#txtHome").html('<span class="label label-important">' + name + '</span><br /><p class="triangle-border left">' + text + '</p>');
			break;
			case "3":
				$("#txtMine").html('<span class="label label-important">' + name + '</span><br /><p class="triangle-border left">' + text + '</p>');
			break;
			case "4":
				$("#txtShop").html('<span class="label label-important">' + name + '</span><br /><p class="triangle-border left">' + text + '</p>');
			break;
			case "5":
				$("#txtRock").html('<span class="label label-important">' + name + '</span><br /><p class="triangle-border left">' + text + '</p>');
			break;
			case "6":
				$("#txtMayor").html('<span class="label label-important">' + name + '</span><br /><p class="triangle-border left">' + text + '</p>');
			break;
		}
	}
	
	function fillText(no, name, data){
		
		var i=1;
		var TimerText = setInterval(function(){
			fillNow(no, name, data.substring(0, i));
			textNoise.play();
			if(i==data.length) clearInterval(TimerText);
			i++;
		},25);
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
							fillText('6', 'Thomas', 'Oh, kau sudah bangun ' + uname + '? Sudah dua hari kau tak sadarkan diri...');
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