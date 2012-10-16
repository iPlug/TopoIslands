function woodyHandler(){
	hideAll();
	$("#B").show();
	$("#B1").show();

	switch(QCount){
		case 1:
			$(".ansBox").hide();			
			fillText('1', 'Woody', May[ConvCount]);
		break;
		default:
			$(".ansBox").hide();
			fillText('1', 'Woody', 'Hai ' + uname + ', hari yang cerah untuk menebang pohon kan?');
		break;
	}
}

function dougHandler(){
	hideAll();
	$("#B").show();
	$("#B2").show();

	switch(QCount){
		case 4:
			$(".ansBox").hide();			
			fillText('2', 'Doug', May[ConvCount]);
		break;
		default:
			$(".ansBox").hide();
			fillText('2', 'Doug', 'Hai ' + uname + ', butuh kamar untuk istirahat?');
		break;
	}
}

function saiHandler(){
	hideAll();
	$("#B").show();
	$("#B3").show();

	switch(QCount){
		case 2:
			$(".ansBox").hide();			
			fillText('3', 'Saibara', May[ConvCount]);
		break;
		default:
			$(".ansBox").hide();
			fillText('3', 'Saibara', 'Hai ' + uname + ', apa yang kau butuhkan dariku?');
		break;
	}
}

function gourHandler(){
	hideAll();
	$("#B").show();
	$("#B4").show();

	switch(QCount){
		case 5:
			$(".ansBox").hide();			
			fillText('4', 'Gourmetchef', May[ConvCount]);
		break;
		default:
			$(".ansBox").hide();
			fillText('4', 'Gourmetchef', 'Hai ' + uname + ', apa bisnismu hari ini?');
		break;
	}
}

function thaiHandler(){
	hideAll();
	$("#B").show();
	$("#B5").show();

	switch(QCount){
		case 3:
			$(".ansBox").hide();			
			fillText('5', 'Thai', May[ConvCount]);
		break;
		default:
			$(".ansBox").hide();
			fillText('5', 'Thai', 'Hai ' + uname + ', apa yang kau lakukan di tempat kerjaku?');
		break;
	}
}

function mayorHandler(){
	hideAll();
	$("#B").show();
	$("#B6").show();

	switch(QCount){
		case 6:
			$(".ansBox").hide();			
			fillText('6', 'Thomas', May[ConvCount]);
		break;
		default:
			$(".ansBox").hide();
			fillText('6', 'Thomas', 'Hai ' + uname + ', apa tugas yang kuberikan sudah selesai?');
		break;
	}
}