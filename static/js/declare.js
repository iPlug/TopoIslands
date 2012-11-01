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
	var lang=0;
	var QC=2;
	var CC=0;
	
	// player
	var mHP=1000;
	var pHP=1000;
	var axeLvl=3;
	var hamLvl=3;
	var sicLvl=3;

	// resource player
	var rUang=0;
	var rKayu=0;
	var rLogam=0;
	var rBatu=0;
	
	//tarif
	var tarifTidur=1000;
	//mini game
	var isPlaying=0;
	var pTool=1;
	var gT=60;
	var gS=0;
	var stopwatch;
	var ptrTimer;
	var chopTimer;
	
	