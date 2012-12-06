function introHandler(){
	if(CC!=6){
		CC++;
		cleanTxt();
		fillText('Chief',intro[CC][lang]);
		if(CC==6) $('#introNext').html('Mulai Tutorial!');
	}else{
		doTuts();
	}
}

function tutsHandler(){
	if(CC!=2){
		CC++;
		cleanTxt();
		fillText('Woody',tuts[CC][lang]);
		if(CC==0){
			$('#tutsTree1').show();
		}
		if(CC==1){
			$('#tutsTree1').fadeOut(1000);
			$('#tutsTree3').show();
			$('#tutsTree2').hide();
		}
		if(CC==2){
			$('#tutsTree3').fadeOut(1000);
			$('#textTut').show();
		}
	}else{
		axeLvl=3;
		doStage1();
	}
}


function woodyHandler(){
	if(CC!=2){
		CC++;
		cleanTxt();
		fillText('Thai',stage2[CC][lang]);
		if(CC==1) $('.stage2').css('border','1px solid white');
		if(CC==2) $('#st2Next').html('Mulai Bekerja!');
	}else{
		hamLvl=3;
		doStage2();
	}
}

function shopHandler(){
	if(CC!=2){
		CC++;
		cleanTxt();
		fillText('Saibara',stage3[CC][lang]);
		if(CC==1) $('.stage4').css('border','1px solid white');
		if(CC==2) $('#st3Next').html('Mulai Bekerja!');
	}else{
		sicLvl=3;
		doStage3();
	}
}

function ringHandler(){
	if(CC!=2){
		CC++;
		cleanTxt();
		fillText('Chief',stage4[CC][lang]);
		if(CC==2) $('#busFinish').html('Aku mengerti!');
	}else{
		doRing();
	}
}

function ringHandler2(){
	if(CC!=3){
		CC++;
		cleanTxt();
		fillText('Doug',ringIntro[CC][lang]);
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
		fillText('Doug',ringFinish[CC][lang]);
		if(CC==3) $('#ringFinish').html('Pindah ke Pulau STAR!');
	}else{
		doStar();
	}
}

function starHandler(){
	if(CC!=4){
		CC++;
		cleanTxt();
		fillText('Gourmet',starIntro[CC][lang]);
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
		fillText('Gourmet',starFinish[CC][lang]);
		if(CC==5) $('#starFinish').html('Selamat Tinggal!');
	}else{
		arenaTuts();
	}
}