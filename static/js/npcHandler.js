function introHandler(){
	if(CC!=5){
		CC++;
		cleanTxt();
		fillText('Chef',intro[CC][lang]);
		if(CC==5) $('#introNext').html('Mulai Tutorial!');
	}else{
		doTuts();
	}
}

function tutsHandler(){
	if(CC!=2){
		CC++;
		cleanTxt();
		fillText('Chef',tuts[CC][lang]);
		if(CC==1) $('.stage1').css('border','1px solid white');
		if(CC==2) $('#tutsNext').html('Mulai Bekerja!');
	}else{
		doStage1();
	}
}


function woodyHandler(){
	if(CC!=2){
		CC++;
		cleanTxt();
		fillText('Chef',stage2[CC][lang]);
		if(CC==1) $('.stage2').css('border','1px solid white');
		if(CC==2) $('#st2Next').html('Mulai Bekerja!');
	}else{
		doStage2();
	}
}

function shopHandler(){
	if(CC!=2){
		CC++;
		cleanTxt();
		fillText('Chef',stage3[CC][lang]);
		if(CC==1) $('.stage4').css('border','1px solid white');
		if(CC==2) $('#st3Next').html('Mulai Bekerja!');
	}else{
		doStage3();
	}
}

function ringHandler(){
	if(CC!=2){
		CC++;
		cleanTxt();
		fillText('Chef',stage4[CC][lang]);
		if(CC==2) $('#busFinish').html('Pindah ke Pulau RING!');
	}else{
		doRing();
	}
}

function ringHandler2(){
	if(CC!=3){
		CC++;
		cleanTxt();
		fillText('Chef',ringIntro[CC][lang]);
		if(CC==2) $('.item4').css('border','1px solid white');
		if(CC==3) $('#ringNext').html('Mulai Latihan!');
	}else{
		doStageRing();
	}
}

function ringHandler3(){
	if(CC!=3){
		CC++;
		cleanTxt();
		fillText('Chef',ringFinish[CC][lang]);
		if(CC==3) $('#ringFinish').html('Pindah ke Pulau STAR!');
	}else{
		doStar();
	}
}

function starHandler(){
	if(CC!=4){
		CC++;
		cleanTxt();
		fillText('Chef',starIntro[CC][lang]);
		if(CC==3) $('.item5').css('border','1px solid #F5F5F5');
		if(CC==4) $('#starNext').html('Mulai Berlatih!');
	}else{
		doStageStar();
	}
}

function starHandler2(){
	if(CC!=5){
		CC++;
		cleanTxt();
		fillText('Chef',starFinish[CC][lang]);
		if(CC==5) $('#starFinish').html('Selamat Tinggal!');
	}else{
		arenaTuts();
	}
}