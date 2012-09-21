//	DECLARE VARIABLE AND FUNCTION
	//	var socket = io.connect('http://10.250.214.130');
	var socket = io.connect(window.location.hostname);
	var time= new Date();
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
		$("#A").css("display","none");
		$("#B").css("display","none");
		$("#C").css("display","none");
		
		$("#B1").css("display","none");
		$("#B2").css("display","none");
		$("#B3").css("display","none");
		$("#B4").css("display","none");
		$("#B5").css("display","none");
		$("#B6").css("display","none");
		
	}
	
	function Signed(){
		console.log(uname);
		if((uname=='')||(uname==null)){
			socket.emit('adduser', 'noob', guild);
		}else{
			socket.emit('adduser', uname, guild);
		}
		$('#wrapper').css('display','inline');
		$('#loginBox').css('display','none');
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
/*	var myImg = new Array(
    'smile',
    'sad',
    'think',
	'XD'
	); */