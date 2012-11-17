function stMini(){
	$(".winBoard").hide();
	$('.msgBox').hide();
	gT=0;
	gS=0;
	eS=0;
	isPlaying=true;
}

function endMini(batas){
	isPlaying=false;
	clearInterval(stopwatch);
	clearTimeout(ptrTimer);
	console.log(gT);
	$(".winBoard").show();
	if(gT<batas){
		$(".txtScore").html(batas-gT);
		gS=(batas-gT);
	}else{
		$(".txtScore").html('0');
		gS=0;
	}
}

function endPVP(){
	isPVP=false;
	isPlaying=false;
	clearInterval(stopwatch);
	clearTimeout(ptrTimer);
	console.log(gT);
	$(".winBoard").show();
	if(eS>6){
		$(".txtScore").html('<h1>You Lose!</h1> <br /><p>Score-mu adalah :</p>' + (gS-eS) + ' vs ' + eS);
		socket.emit('losePVP');
	}else{
		$(".txtScore").html('<h1>You Win!</h1> <br /><p>Score-mu adalah :</p>' + (gS-eS) + ' vs ' + eS);
		socket.emit('winPVP');
	}
}

function endCoop(){
	isCoop=false;
	isPlaying=false;
	clearInterval(stopwatch);
	clearTimeout(ptrTimer);
	console.log(gT);
	$(".winBoard").show();
	if(gT<500){
		$(".txtScore").html(500-gT);
		gS=(500-gT);
	}else{
		$(".txtScore").html('0');
		gS=0;
	}
	socket.emit('endCoop', gS);
}

function hidePtr(id, sharpLvl){
	if((isPlaying==true) &&(isWorking==false) && (($(id).css('border')=='1px solid rgb(255, 255, 255)') || ($(id)[0].style.border=='1px solid white')) ){
		//----- for PVP only --------
		if(isPVP==true || isCoop==true){
			socket.emit('destroy',$(id).attr('id'),sharpLvl);
		}		
		//---------------------------
		isWorking=true;
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
					isWorking=false;
				},sharpLvl*1000);
	}
}