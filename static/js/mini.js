function doTidur(){
	pHP=mHP;
	rUang-=tarifTidur;
	hideAll();
	$("#A").show();
	resetR();
}

function resetR(){
	$("#rUang").html(rUang);
	$("#rWood").html(rKayu);
	$("#rMine").html(rLogam);
	$("#rRock").html(rBatu);
	$("#pHP").html(pHP);
}

function preMn(no){
	hideAll();
	$("#D").show();
	$("#D" + no).show();
	$(".stBoard").show();
	$(".pointer").hide();
	$(".storeBag").hide();
	$(".winBoard").hide();
	$(".gScore").hide();
	$(".gTimer").hide();
}

function startMini(){
	pHP-=100;
	$(".stBoard").hide();
	$(".winBoard").hide();
	$(".pointer").show();
	$(".storeBag").show();
	$(".gScore").show();
	$(".gTimer").show();
	$(".pointer").css("border","1px solid transparent");
	isPlaying=1;
	pTool=mTool;
	gT=30;
	gS=0;
	$(".gTimer").html(gT);
	$(".gScore").html(gS);
	stopwatch = setInterval(function(){
		gT--;
		$(".gTimer").html(gT);
		if(gT==0){
			endMini();
		}
	},1000);
}

function endMini(){
	isPlaying=0;
	clearInterval(stopwatch);
	clearTimeout(ptrTimer);
	var timerEnd = setTimeout(function(){
		$(".gGain").html(gS*4);
		$(".storeBag").hide();
		$(".pointer").hide();
		$(".winBoard").show();
	},2000);
}

function mnAmbil(tipe){
	switch(tipe){
		case 'w':
			rKayu+=gS*4;
		break;
		case 'm':
			rLogam+=gS*4;
		break;
		case 'r':
			rBatu+=gS*4;
		break;
	}
	hideAll();
	$("#A").show();
	resetR();
}

function mnJual(tipe){
	rUang+=gS*400;
	hideAll();
	$("#A").show();
	resetR();
}

function hidePtr(tipe, no){
	if(isPlaying==1 && pTool>0){
		pTool--;		
		chop.play();
		chopTimer = setTimeout(function(){
			if(sharpLvl>=2) chop.play();
		},1000);
		chopTimer = setTimeout(function(){
			if(sharpLvl==3) chop.play();
		},2000);
		$(".ptr" + no).css("border","1px red solid");
			ptrTimer = setTimeout(function(){
					gS++;
					$(".gScore").html(gS);
					$(".ptr" + no).fadeOut(500);
					pTool++;
				},sharpLvl*1000);
	}
}