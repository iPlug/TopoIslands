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
	
	var stage;
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
	
	
	//animation
	var myBoy = new Image();
	myBoy.src='/img/acc/boy.png';
	var myCat = new Image();
	myCat.src='/img/acc/cat.png';
	var myHorn = new Image();
	myHorn.src='/img/acc/horn.png';
	var myPink = new Image();
	myPink.src='/img/acc/pink.png';
	var myPrincess = new Image();
	myPrincess.src='/img/acc/princess.png';
	
	var spriteSheet = new Array();

	spriteSheet[0]= new createjs.SpriteSheet({
    // image to use
    images: [myBoy], 
    // width, height & registration point of each sprite
    frames: {width: 50, height: 85, regX: 25, regY: 42}, 
    animations: {    
        idle: [0, 3, "idle"],
		walk: [4, 6, "walk"]
    }
	});
	
	spriteSheet[1]= new createjs.SpriteSheet({
    // image to use
    images: [myCat], 
    // width, height & registration point of each sprite
    frames: {width: 50, height: 85, regX: 25, regY: 42}, 
    animations: {    
        idle: [0, 3, "idle"],
		walk: [4, 6, "walk"]
    }
	});
	
	spriteSheet[2]= new createjs.SpriteSheet({
    // image to use
    images: [myHorn], 
    // width, height & registration point of each sprite
    frames: {width: 50, height: 85, regX: 25, regY: 42}, 
    animations: {    
        idle: [0, 3, "idle"],
		walk: [4, 6, "walk"]
    }
	});
	
	spriteSheet[3]= new createjs.SpriteSheet({
    // image to use
    images: [myPink], 
    // width, height & registration point of each sprite
    frames: {width: 50, height: 85, regX: 25, regY: 42}, 
    animations: {    
        idle: [0, 3, "idle"],
		walk: [4, 6, "walk"]
    }
	});
	
	spriteSheet[4]= new createjs.SpriteSheet({
    // image to use
    images: [myPrincess], 
    // width, height & registration point of each sprite
    frames: {width: 50, height: 85, regX: 25, regY: 42}, 
    animations: {    
        idle: [0, 3, "idle"],
		walk: [4, 6, "walk"]
    }
	});
	
	var f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame || window.msRequestAnimationFrame;
	
	
	// conversation and quest system
	var lang=0;
	var QC=2;
	var CC=0;
	var TimerText;
	
	// player
	var axeLvl=3;
	var hamLvl=3;
	var sicLvl=3;
	var tutorial=0;
	var sp;
	var imgP;
	
	//mini game
	var isPlaying=false;
	var isWorking=false;
	var gT=60;
	var gS=0;
	var stopwatch;
	var ptrTimer;
	var chopTimer;
	
	//PVP
	var fighter=0;
	var rea=0;
	var isPVP=false;
	var isCoop=false;
	var eS=0;
	
	
	var pfx = ["webkit", "moz", "ms", "o", ""];  
	function RunPrefixMethod(obj, method) {  
		var p = 0, m, t;  
		while (p < pfx.length && !obj[m]) {  
			m = method;  
			if (pfx[p] == "") {  
				m = m.substr(0,1).toLowerCase() + m.substr(1);  
			}  
			m = pfx[p] + m;  
			t = typeof obj[m];  
			if (t != "undefined") {  
				pfx = [pfx[p]];  
				return (t == "function" ? obj[m]() : obj[m]);  
			}  
			p++;  
		}  
	}  