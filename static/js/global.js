function hideAll(){
		$('.msgBox').hide();
		
		$("#credit").hide();
		$("#rank").hide();
		$("#map").hide();
		$("#intro").hide();
		$("#tutorial").hide();
		$("#stage1").hide();
		$("#stage2").hide();
		$("#stage3").hide();
		
		$("#introRing").hide();
		$("#stageRing").hide();
		
		$("#introStar").hide();
		$("#stageStar").hide();
		
		$("#arenaLobi").hide();
		$("#coopLobi").hide();
		
		$("#arenaRoom").hide();
		$("#coopRoom").hide();
		
		$("#pvp1").hide();
		$("#pvp2").hide();
		$("#pvp3").hide();
		
		$("#coop1").hide();
		$("#coop2").hide();
		$("#coop3").hide();
		
		$("#animBus").hide();
		$("#animRing").hide();
		$("#animStar").hide();
	}
	
function reqRefresh(){
		socket.emit('reqRefresh');
}

function refreshNow(level, exp, axe, hammer, sickle, win, lose, score, tuts, pp){
		axeLvl=4-axe;
		hamLvl=4-hammer;
		sicLvl=4-sickle;
		$("#labName").html(uname);
		$("#labLevel").html(level);
		$("#labEXP").html(exp);
		$("#labWin").html(win);
		$("#labLose").html(lose);
		$("#labScore").html(score);
		$("#rKapak").html(axe);
		$("#rPalu").html(hammer);
		$("#rSabit").html(sickle);
		
		tutorial=tuts;
		sp=tutorial-6;
		if(sp>0) $('.infoBox').fadeIn(1000);
		
		$('#pp').html("<img src=img/profile/" + pp + " width=90px height=100px />");
		$('.infoFighter').html("<img src=img/profile/" + pp + " width=180px height=200px />");
		
		imgP='img/profile/' + pp;
		$('.imgMe').html('<img src=/img/profile/' + pp + ' width=30px height=35px />');
}

function Signed(){
		//prepare the stage
		hideAll();
		$('#butBarter').click();
		$('#wrapper').show();
		$('#loginBox').hide();
		
		if(tutorial<3){
			$('#butRing').hide();
			$('#butStar').hide();
			$('#butPvp').hide();
			$('#butCoop').hide();
			switch(tutorial){
				case 0:
					startIntro();
				break;
				case 1:
					$('#stage1').fadeIn(1000);
					preStage2();
				break;
				case 2:
					$('#stage2').fadeIn(1000);
					preStage3();
				break;
			}
		}else if(tutorial<4){
			$('#butStar').hide();
			$('#butPvp').hide();
			$('#butCoop').hide();
			$('#map').show();
		}else if(tutorial<5){
			$('#butPvp').hide();
			$('#butCoop').hide();
			$('#map').show();
		}else{
			$('#map').show();
		}
	}
	
function startIntro(){
	hideAll();
	$('.msgBox').show();
	$('#intro').fadeIn(1000);
	fillText('Chief', intro[CC][lang]);
}

function doTuts(){
	CC=0;
	hideAll();
	$('.msgBox').show();
	$('#tutorial').fadeIn(1000);
	$('#textTut').hide();
	$('#tutsTree3').hide();
	$('#tutsTree1').css("border","1px white solid");
	$('#tutsTree3').css("border","1px white solid");
	fillText('Woody', tuts[CC][lang]);
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
		if(gS==4){
			endMini(500);
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
		if(gS==4){
			endMini(500);
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
		if(gS==4){
			endMini(500);
		}
	},100);
}

function preRing(){
	animateBus();
	$('.winBoard').hide();
	$('.msgBox').show();
	CC=-1;
	ringHandler();
}

function doRing(){
	CC=-1;
	$('.msgBox').show();
	$('#butRing').fadeIn(500);
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
			endMini(1000);
		}
	},100);
}

function ringFin(){
	animateRing();
	$('.winBoard').hide();
	$('.msgBox').show();
	CC=-1;
	ringHandler3();
}

function doStar(){
	CC=-1;
	$('.msgBox').hide();
	$('#butStar').fadeIn(500);
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
			endMini(1000);
		}
	},100);
}

function starFin(){
	socket.emit('reqRefresh');
	tutorial=5;
	animateStar();
	$('.winBoard').hide();
	$('.msgBox').show();
	CC=-1;
	starHandler2();
}

function arenaTuts(){
	socket.emit('updateScoreT',0);
	$('.msgBox').hide();
	$('#butPvp').fadeIn(500);
	$('#butCoop').fadeIn(500);
}

function doPvp(){
	socket.emit('roomReq',0);
	socket.emit('reqLB');
	hideAll();
	$('#arenaLobi').fadeIn(1000);
	$('#butTeman').attr("disabled", true);
	$('#butBarter').click();
	$('#chatBoardG').html('');
}

function doCoop(){
	socket.emit('roomReq',1);
	socket.emit('reqLB');
	hideAll();
	$('#coopLobi').fadeIn(1000);
	$('#butTeman').attr("disabled", true);
	$('#butBarter').click();
	$('#chatBoardG').html('');
}

// PLAYER TO PLAYER FUNCTION (PVP AND COOP)
// -------------------------

function joinArena(room){
	$('#butTeman').attr("disabled", false);
	$('#butTeman').click();
	socket.emit('joinArena', room);
}

function joinParty(room){
	$('#butTeman').attr("disabled", false);
	$('#butTeman').click();
	socket.emit('joinParty', room);
}

function leaveArena(){
	socket.emit('leaveArena');
}

function autoJoin(type){
	socket.emit('autoJoin', type);
}

function doArena(num){
	isPVP=true;
	stMini();
	hideAll();
	$('#pvp'+num).fadeIn(1000);
	$('.item' + (num + 5)).show();
	$('.item' + (num + 5)).css("border","1px transparent solid");	
	stopwatch = setInterval(function(){
		gT++;
		$(".gTimer").html(gT);
		if(gS==13){
			endPVP();
		}
	},100);
}

function doParty(num){
	isCoop=true;
	stMini();
	hideAll();
	$('#coop'+num).fadeIn(1000);
	$('.item' + (num + 8)).show();
	$('.item' + (num + 8)).css("border","1px transparent solid");	
	stopwatch = setInterval(function(){
		gT++;
		$(".gTimer").html(gT);
		if(gS==13){
			endCoop();
		}
	},100);
}

function doLevelUp(lvl){

}