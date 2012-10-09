
function resetR(){
	$("#rUang").html(rUang);
	$("#rWood").html(rKayu);
}

function preMn(no){
	hideAll();
	$("#D").show();
	$("#D" + no).show();
	$(".pointer").hide();
	$(".storeBag").hide();
	$(".winBoard").hide();
	$(".gScore").hide();
	$(".gTimer").hide();
	
}

function startMini(){
	$(".winBoard").hide();
	$(".pointer").show();
	$(".storeBag").show();
	$(".gScore").show();
	$(".gTimer").show();
	isPlaying=1;
	gT=20;
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
	clearTimeout(ptrTimer1);
	clearTimeout(ptrTimer2);
	clearTimeout(ptrTimer3);
	clearTimeout(ptrTimer4);
	clearTimeout(ptrTimer5);
	clearTimeout(ptrTimer6);
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
	}
	hideAll();
	$("#A").show();
	resetR();
}

function mnJual(tipe){
	switch(tipe){
		case 'w':
			rUang+=gS*400;
		break;
	}
	$("#A").show();
	resetR();
}

function showPtr(tipe, no){
if(isPlaying==1){
	switch(no){
		case 1:
			ptrTimer1 = setTimeout(function(){
				$(".ptr1").show();
			},6000);
		break;
		case 2:
			ptrTimer2 = setTimeout(function(){
				$(".ptr2").show();
			},6000);
		break;
		case 3:
			ptrTimer3 = setTimeout(function(){
				$(".ptr3").show();
			},6000);
		break;
		case 4:
			ptrTimer4 = setTimeout(function(){
				$(".ptr4").show();
			},6000);
		break;
		case 5:
			ptrTimer5 = setTimeout(function(){
				$(".ptr5").show();
			},6000);
		break;
		case 6:
			ptrTimer6 = setTimeout(function(){
				$(".ptr6").show();
			},6000);
		break;
	}
}
}

function hidePtr(tipe, no){
if(isPlaying==1){
	switch(no){
		case 1:
			ptrTimer1 = setTimeout(function(){
				gS++;
				$(".gScore").html(gS);
				$(".ptr1").hide();
				showPtr('w',1);
			},2000);
		break;
		case 2:
			ptrTimer2 = setTimeout(function(){
				gS++;
				$(".gScore").html(gS);
				$(".ptr2").hide();
				showPtr('w',2);
			},2000);
		break;
		case 3:
			ptrTimer3 = setTimeout(function(){
				gS++;
				$(".gScore").html(gS);
				$(".ptr3").hide();
				showPtr('w',3);
			},2000);
		break;
		case 4:
			ptrTimer4 = setTimeout(function(){
				gS++;
				$(".gScore").html(gS);
				$(".ptr4").hide();
				showPtr('w',4);
			},2000);
		break;
		case 5:
			ptrTimer5 = setTimeout(function(){
				gS++;
				$(".gScore").html(gS);
				$(".ptr5").hide();
				showPtr('w',5);
			},2000);
		break;
		case 6:
			ptrTimer6 = setTimeout(function(){
				gS++;
				$(".gScore").html(gS);
				$(".ptr6").hide();
				showPtr('w',6);
			},2000);
		break;
	}
}
}

/*
function showPtr(tipe, no){
	switch(no){
		case 1:
			ptrTimer1 = setTimeout(function(){
				switch(tipe){
					case 'w':
						$(".ptr1").show();
					break;
				}
			},6000);
		break;
		case 2:
			ptrTimer2 = setTimeout(function(){
				switch(tipe){
					case 'w':
						$(".ptr2").show();
					break;
				}
			},6000);
		break;
		case 3:
			ptrTimer3 = setTimeout(function(){
				switch(tipe){
					case 'w':
						$(".ptr3").show();
					break;
				}
			},6000);
		break;
		case 4:
			ptrTimer4 = setTimeout(function(){
				switch(tipe){
					case 'w':
						$(".ptr4").show();
					break;
				}
			},6000);
		break;
		case 5:
			ptrTimer5 = setTimeout(function(){
				switch(tipe){
					case 'w':
						$(".ptr5").show();
					break;
				}
			},6000);
		break;
		case 6:
			ptrTimer6 = setTimeout(function(){
				switch(tipe){
					case 'w':
						$(".ptr6").show();
					break;
				}
			},6000);
		break;
	}
}

function hidePtr(tipe, no){
	switch(no){
		case 1:
			ptrTimer1 = setTimeout(function(){
				switch(tipe){
					case 'w':
						$(".ptr1").hide();
						showPtr('w',1);
					break;
				}
			},2000);
		break;
		case 2:
			ptrTimer2 = setTimeout(function(){
				switch(tipe){
					case 'w':
						$(".ptr2").hide();
						showPtr('w',2);
					break;
				}
			},2000);
		break;
		case 3:
			ptrTimer3 = setTimeout(function(){
				switch(tipe){
					case 'w':
						$(".ptr3").hide();
						showPtr('w',3);
					break;
				}
			},2000);
		break;
		case 4:
			ptrTimer4 = setTimeout(function(){
				switch(tipe){
					case 'w':
						$(".ptr4").hide();
						showPtr('w',4);
					break;
				}
			},2000);
		break;
		case 5:
			ptrTimer5 = setTimeout(function(){
				switch(tipe){
					case 'w':
						$(".ptr5").hide();
						showPtr('w',5);
					break;
				}
			},2000);
		break;
		case 6:
			ptrTimer6 = setTimeout(function(){
				switch(tipe){
					case 'w':
						$(".ptr6").hide();
						showPtr('w',6);
					break;
				}
			},2000);
		break;
	}
}

*/