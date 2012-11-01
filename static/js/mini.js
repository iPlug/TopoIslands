function stMini(){
	$(".winBoard").hide();
	$('.msgBox').hide();
	gT=0;
	gS=0;
}

function endMini(){
	isPlaying=0;
	clearInterval(stopwatch);
	clearTimeout(ptrTimer);
	console.log(gT);
	$(".winBoard").show();
	$(".txtScore").html(500-gT);
}

function hidePtr(id, sharpLvl){
	if((pTool>0) && (($(id).css('border')=='1px solid rgb(255, 255, 255)') || ($(id)[0].style.border=='1px solid white')) ){
		pTool--;
		chop.play();
		chopTimer = setTimeout(function(){
			if(sharpLvl>=2) chop.play();
		},1000);
		chopTimer = setTimeout(function(){
			if(sharpLvl==3) chop.play();
		},2000);
		$(id).css("border","1px red solid");
			ptrTimer = setTimeout(function(){
					bag.play();
					gS++;
					$(id).fadeOut(800);	
					pTool++;
				},sharpLvl*1000);
	}
}

function FhidePtr(id, sharpLvl){
//	if(($(id).css('border')=='1px solid rgb(255, 255, 255)') || ($(id)[0].style.border=='1px solid white')) {
		$(id).css("border","1px blue solid");
			ptrTimer = setTimeout(function(){
					$(id).fadeOut(800);	
				},sharpLvl*1000);
//	}
}