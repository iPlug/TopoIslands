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
	
	// conversation and quest system
	var QCount=0;
	var ConvCount=0;
	var May = new Array;
	var aMay1 =  new Array;
	var aMay2 =  new Array;
	var aMay3 =  new Array;
	
	// player
	var mHP=1000;
	var pHP=1000;
	
	// resource player
	var rUang=0;
	var rKayu=0;
	var rLogam=0;
	var rBatu=0;
	
	//tarif
	var tarifTidur=1000;
	//mini game
	var isPlaying=0;
	var gT=60;
	var gS=0;
	var stopwatch;
	var ptrTimer1;
	var ptrTimer2;
	var ptrTimer3;
	var ptrTimer4;
	var ptrTimer5;
	var ptrTimer6;
	
	