function hideAll(){
		$("#map").hide();
		$("#intro").hide();
		$("#tutorial").hide();
		$("#stage1").hide();
		$("#stage2").hide();
		$("#stage3").hide();
		$("#stage4").hide();
		$("#introRing").hide();
		$("#stageRing").hide();
		$("#introStar").hide();
		$("#stageStar").hide();
	}
	
function Signed(){
		if((uname!='')&&(uname!=null)){
			console.log(uname);
			socket.emit('adduser', uname, guild);
			
			//prepare the conversation
			
			//prepare the stage
			hideAll();
			$('#wrapper').show();
			$('#loginBox').hide();
			startIntro();
			//doStar();
		}else{
			
		}
	}
	
function startIntro(){
	hideAll();
	$('#intro').fadeIn(1000);
	fillText('Chef', intro[CC][lang]);
}

function doTuts(){
	CC=0;
	hideAll();
	$('#tutorial').fadeIn(1000);
	fillText('Chef', tuts[CC][lang]);
}

function doStage1(){
	stMini();
	$('.item1').show();
	$('.item1').css("border","1px transparent solid");
	CC=0;
	hideAll();
	$('#stage1').fadeIn(1000);
	stopwatch = setInterval(function(){
		gT++;
		$(".gTimer").html(gT);
		if(gS==8){
			endMini();
		}
	},100);
}

function preStage2(){
	$('.winBoard').hide();
	$('.msgBox').show();
	CC=-1;
	woodyHandler();
}

function doStage2(){
	stMini();
	$('.item2').show();
	$('.item2').css("border","1px transparent solid");
	hideAll();
	$('#stage2').fadeIn(1000);
	
	stopwatch = setInterval(function(){
		gT++;
		$(".gTimer").html(gT);
		if(gS==8){
			endMini();
		}
	},100);
}

function preStage3(){
	$('.winBoard').hide();
	$('.msgBox').show();
	CC=-1;
	shopHandler();
}

function doStage3(){
	stMini();
	hideAll();
	$('#stage3').fadeIn(1000);
	$('.item3').show();
	$('.item3').css("border","1px transparent solid");	
	stopwatch = setInterval(function(){
		gT++;
		$(".gTimer").html(gT);
		if(gS==8){
			endMini();
		}
	},100);
}

function preRing(){
	$('.winBoard').hide();
	$('.msgBox').show();
	CC=-1;
	ringHandler();
}

function doRing(){
	CC=-1;
	hideAll();
	$('#introRing').fadeIn(1000);
	ringHandler2();
}

function doStageRing(){
	stMini();
	hideAll();
	$('#stageRing').fadeIn(1000);
	$('.item4').show();
	$('.item4').css("border","1px transparent solid");	
	stopwatch = setInterval(function(){
		gT++;
		$(".gTimer").html(gT);
		if(gS==12){
			endMini();
		}
	},100);
}

function ringFin(){
	$('.winBoard').hide();
	$('.msgBox').show();
	CC=-1;
	ringHandler3();
}

function doStar(){
	CC=-1;
	hideAll();
	$('#introStar').fadeIn(1000);
	starHandler();
}

function doStageStar(){
	stMini();
	hideAll();
	$('#stageStar').fadeIn(1000);
	$('.item5').show();
	$('.item5').css("border","1px transparent solid");	
	stopwatch = setInterval(function(){
		gT++;
		$(".gTimer").html(gT);
		if(gS==12){
			endMini();
		}
	},100);
}

function starFin(){
	$('.winBoard').hide();
	$('.msgBox').show();
	CC=-1;
	starHandler2();
}