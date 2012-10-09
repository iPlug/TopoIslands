function hideAll(){
		$("#A").hide();
		$("#B").hide();
		$("#C").hide();
		$("#D").hide();
		
		$("#B1").hide();
		$("#B2").hide();
		$("#B3").hide();
		$("#B4").hide();
		$("#B5").hide();
		$("#B6").hide();
		
		$("#D1").hide();
		$("#D2").hide();
		$("#D3").hide();
		
	}
	
function Signed(){
		if((uname!='')&&(uname!=null)){
			console.log(uname);
			socket.emit('adduser', uname, guild);
			
			//prepare the conversation
			initConv();
			
			//prepare the stage
			hideAll();
			$('#wrapper').show();
			$('#loginBox').hide();
			
			//$('#A').show();
			//startTutorial();
			//$('.ansBox').hide();
			
			
			$('#B').show();
			$('#B6').show();
			fillText('6', 'Thomas', May[ConvCount]);
			
			//hideAll();
			//$("#D").show();
			//$("#D1").show();
		}else{
			
		}
	}
	
function cleanTxt(no){
		switch(no){
			case "1":
				$("#txtWood").html('');
			break;
			case "2":
				$("#txtHome").html('');
			break;
			case "3":
				$("#txtMine").html('');
			break;
			case "4":
				$("#txtShop").html('');
			break;
			case "5":
				$("#txtRock").html('');
			break;
			case "6":
				$("#txtMayor").html('');
			break;
		}
	}
	
function fillNow(no, name, text){
		switch(no){
			case "1":
				$("#txtWood").html('<span class="label label-important">' + name + '</span><br /><p class="triangle-border left">' + text + '</p>');
			break;
			case "2":
				$("#txtHome").html('<span class="label label-important">' + name + '</span><br /><p class="triangle-border left">' + text + '</p>');
			break;
			case "3":
				$("#txtMine").html('<span class="label label-important">' + name + '</span><br /><p class="triangle-border left">' + text + '</p>');
			break;
			case "4":
				$("#txtShop").html('<span class="label label-important">' + name + '</span><br /><p class="triangle-border left">' + text + '</p>');
			break;
			case "5":
				$("#txtRock").html('<span class="label label-important">' + name + '</span><br /><p class="triangle-border left">' + text + '</p>');
			break;
			case "6":
				$("#txtMayor").html('<span class="label label-important">' + name + '</span><br /><p class="triangle-border left">' + text + '</p>');
			break;
		}
	}

function fillAns(no){
	switch(no){
		
		case "1":
			$('#boxWoody').show();
			if(QCount==1){
				$('.pil4').hide();
				$('.pil5').hide();
				$('.pil6').hide();
				$('.pil1').html(aMay1[ConvCount].substring(2,aMay1[ConvCount].length));
				$('.pil2').html(aMay2[ConvCount].substring(2,aMay2[ConvCount].length));
				$('.pil3').html(aMay3[ConvCount].substring(2,aMay3[ConvCount].length));
				
				if(aMay1[ConvCount]==''){
					$('.pil1').hide();
				}else{
					$('.pil1').show();
				}
				
				if(aMay2[ConvCount]=='' ){
					$('.pil2').hide();
				}else{
					$('.pil2').show();
				}
				
				if(aMay3[ConvCount]=='' ){
					$('.pil3').hide();
				}else{
					$('.pil3').show();
				}
			}else{
				$('.pil1').hide();
				$('.pil2').hide();
				$('.pil3').hide();
				$('.pil4').show();
				$('.pil5').show();
				$('.pil6').show();
				$('.pil4').html('Aku ingin Menebang Pohon!');
				$('.pil5').html('Aku ingin bertanya tentang...');
				$('.pil6').html('Aku akan kembali lagi nanti.');
			}
		break;
		case "2":
			$('#boxDoug').show();
			if(QCount==4){
				$('.pil4').hide();
				$('.pil5').hide();
				$('.pil6').hide();
				$('.pil1').html(aMay1[ConvCount].substring(2,aMay1[ConvCount].length));
				$('.pil2').html(aMay2[ConvCount].substring(2,aMay2[ConvCount].length));
				$('.pil3').html(aMay3[ConvCount].substring(2,aMay3[ConvCount].length));
				
				if(aMay1[ConvCount]==''){
					$('.pil1').hide();
				}else{
					$('.pil1').show();
				}
				
				if(aMay2[ConvCount]=='' ){
					$('.pil2').hide();
				}else{
					$('.pil2').show();
				}
				
				if(aMay3[ConvCount]=='' ){
					$('.pil3').hide();
				}else{
					$('.pil3').show();
				}
			}else{
				$('.pil1').hide();
				$('.pil2').hide();
				$('.pil3').hide();
				$('.pil4').show();
				$('.pil5').show();
				$('.pil6').show();
				$('.pil4').html('Aku ingin Beristirahat!');
				$('.pil5').html('Aku ingin bertanya tentang...');
				$('.pil6').html('Aku akan kembali lagi nanti.');
			}
		break;
		case "3":
			$('#boxSaibara').show();
			if(QCount==2){
				$('.pil4').hide();
				$('.pil5').hide();
				$('.pil6').hide();
				$('.pil1').html(aMay1[ConvCount].substring(2,aMay1[ConvCount].length));
				$('.pil2').html(aMay2[ConvCount].substring(2,aMay2[ConvCount].length));
				$('.pil3').html(aMay3[ConvCount].substring(2,aMay3[ConvCount].length));
				
				if(aMay1[ConvCount]==''){
					$('.pil1').hide();
				}else{
					$('.pil1').show();
				}
				
				if(aMay2[ConvCount]=='' ){
					$('.pil2').hide();
				}else{
					$('.pil2').show();
				}
				
				if(aMay3[ConvCount]=='' ){
					$('.pil3').hide();
				}else{
					$('.pil3').show();
				}
			}else{
				$('.pil1').hide();
				$('.pil2').hide();
				$('.pil3').hide();
				$('.pil4').show();
				$('.pil5').show();
				$('.pil6').show();
				$('.pil4').html('Aku ingin Menambang Lambang!');
				$('.pil5').html('Aku ingin bertanya tentang...');
				$('.pil6').html('Aku akan kembali lagi nanti.');
			}
		break;
		case "4":
			$('#boxGour').show();
			if(QCount==5){
				$('.pil4').hide();
				$('.pil5').hide();
				$('.pil6').hide();
				$('.pil1').html(aMay1[ConvCount].substring(2,aMay1[ConvCount].length));
				$('.pil2').html(aMay2[ConvCount].substring(2,aMay2[ConvCount].length));
				$('.pil3').html(aMay3[ConvCount].substring(2,aMay3[ConvCount].length));
				
				if(aMay1[ConvCount]==''){
					$('.pil1').hide();
				}else{
					$('.pil1').show();
				}
				
				if(aMay2[ConvCount]=='' ){
					$('.pil2').hide();
				}else{
					$('.pil2').show();
				}
				
				if(aMay3[ConvCount]=='' ){
					$('.pil3').hide();
				}else{
					$('.pil3').show();
				}
			}else{
				$('.pil1').hide();
				$('.pil2').hide();
				$('.pil3').hide();
				$('.pil4').show();
				$('.pil5').show();
				$('.pil6').show();
				$('.pil4').html('Aku ingin Menjaga Toko!');
				$('.pil5').html('Aku ingin bertanya tentang...');
				$('.pil6').html('Aku akan kembali lagi nanti.');
			}
		break;
		case "5":
			$('#boxThai').show();
			if(QCount==3){
				$('.pil4').hide();
				$('.pil5').hide();
				$('.pil6').hide();
				$('.pil1').html(aMay1[ConvCount].substring(2,aMay1[ConvCount].length));
				$('.pil2').html(aMay2[ConvCount].substring(2,aMay2[ConvCount].length));
				$('.pil3').html(aMay3[ConvCount].substring(2,aMay3[ConvCount].length));
				
				if(aMay1[ConvCount]==''){
					$('.pil1').hide();
				}else{
					$('.pil1').show();
				}
				
				if(aMay2[ConvCount]=='' ){
					$('.pil2').hide();
				}else{
					$('.pil2').show();
				}
				
				if(aMay3[ConvCount]=='' ){
					$('.pil3').hide();
				}else{
					$('.pil3').show();
				}
			}else{
				$('.pil1').hide();
				$('.pil2').hide();
				$('.pil3').hide();
				$('.pil4').show();
				$('.pil5').show();
				$('.pil6').show();
				$('.pil4').html('Aku ingin Mengumpulkan Batu!');
				$('.pil5').html('Aku ingin bertanya tentang...');
				$('.pil6').html('Aku akan kembali lagi nanti.');
			}
		break;
		case "6":
			$('#boxMayor').show();
			if(QCount==0 || QCount==6){
			$('.pil4').hide();
			$('.pil5').hide();
			$('.pil6').hide();
			$('#aMay1').html(aMay1[ConvCount].substring(2,aMay1[ConvCount].length));
			$('#aMay2').html(aMay2[ConvCount].substring(2,aMay2[ConvCount].length));
			$('#aMay3').html(aMay3[ConvCount].substring(2,aMay3[ConvCount].length));
			
				if(aMay1[ConvCount]==''){
					$('#aMay1').hide();
				}else{
					$('#aMay1').show();
				}
				
				if(aMay2[ConvCount]=='' ){
					$('#aMay2').hide();
				}else{
					$('#aMay2').show();
				}
				
				if(aMay3[ConvCount]=='' ){
					$('#aMay3').hide();
				}else{
					$('#aMay3').show();
				}
			}else{
				$('.pil1').hide();
				$('.pil2').hide();
				$('.pil3').hide();
				$('.pil4').hide();
				$('.pil5').hide();
				$('.pil6').show();
				$('.pil4').html('Aku ingin Mengumpulkan Batu!');
				$('.pil5').html('Aku ingin bertanya tentang...');
				$('.pil6').html('Aku akan kembali lagi nanti.');
			}
		break;
	}
}
	
function fillText(no, name, data){
		
		var i=1;
		var TimerText = setInterval(function(){
			fillNow(no, name, data.substring(0, i));
			textNoise.play();
			if(i==data.length){
				fillAns(no);
				clearInterval(TimerText);
			}
			i++;
		},25);
	}

function startTutorial(){
		hideAll();
		$('#C').show();
		$('#txtTut').hide();
		$('#txtTut').html('Bangun... Bangunlah... Kau tidak apa-apa....?');
		clearTimeout(popTimer);    
		$('#txtTut').fadeIn(900);
		popTimer = setTimeout(function(){
			$('#txtTut').fadeOut(900);
			popTimer = setTimeout(function(){
				$('#txtTut').html('Oh, dia pingsan... Cepat bawa dia ke rumahku...');
			}, 1000);
			$('#txtTut').fadeIn(900);
			
			popTimer = setTimeout(function(){
				$('#txtTut').fadeOut(900);
				popTimer = setTimeout(function(){
					$('#txtTut').html('Dua Hari Kemudian...');
					$('#txtTut').fadeIn(3000);
				}, 5000);
				
				popTimer = setTimeout(function(){
					$('#txtTut').fadeOut(3000);
					popTimer = setTimeout(function(){
						popTimer = setTimeout(function(){
							fillText('6', 'Thomas', May[ConvCount]);
						}, 2100);
						$('#C').fadeOut(900);
						$('#wrapper').hide();
						$('#wrapper').fadeIn(2000);
						$('#B').show();
						$('#B6').show();
						cleanTxt('6');
					}, 10000);
				}, 10000);	
			}, 6000);
		}, 6000);
	}

function ansHandler(no, data){
	var tipe=data.substring(0,1);
	switch(no){	
		case '1':
		switch(tipe){
			case '+':
				ConvCount++;
				$("#txtWood").html('');
				$(".ansBox").hide();
				
				fillText(no, 'Woody', May[ConvCount]);
			break;
			case '=':
				$("#txtWood").html('');
				$(".ansBox").hide();
				
				fillText(no, 'Woody', May[ConvCount]);
			break;
			case '_':
				ConvCount++;
				QCount++;
				hideAll();
				$("#A").show();
			break;
			case 'x':
				hideAll();
				$("#A").show();
			break;
		}
		break;
		case '2':
		switch(tipe){
			case '+':
				ConvCount++;
				$("#txtHome").html('');
				$(".ansBox").hide();
				
				fillText(no, 'Doug', May[ConvCount]);
			break;
			case '=':
				$("#txtHome").html('');
				$(".ansBox").hide();
				
				fillText(no, 'Doug', May[ConvCount]);
			break;
			case '_':
				ConvCount++;
				QCount++;
				hideAll();
				$("#A").show();
			break;
			case 'x':
				hideAll();
				$("#A").show();
			break;
		}
		break;
		case '3':
		switch(tipe){
			case '+':
				ConvCount++;
				$("#txtMine").html('');
				$(".ansBox").hide();
				
				fillText(no, 'Saibara', May[ConvCount]);
			break;
			case '=':
				$("#txtMine").html('');
				$(".ansBox").hide();
				
				fillText(no, 'Saibara', May[ConvCount]);
			break;
			case '_':
				ConvCount++;
				QCount++;
				hideAll();
				$("#A").show();
			break;
			case 'x':
				hideAll();
				$("#A").show();
			break;
		}
		break;
		case '4':
		switch(tipe){
			case '+':
				ConvCount++;
				$("#txtShop").html('');
				$(".ansBox").hide();
				
				fillText(no, 'Gourmetchef', May[ConvCount]);
			break;
			case '=':
				$("#txtShop").html('');
				$(".ansBox").hide();
				
				fillText(no, 'Gourmetchef', May[ConvCount]);
			break;
			case '_':
				ConvCount++;
				QCount++;
				hideAll();
				$("#A").show();
			break;
			case 'x':
				hideAll();
				$("#A").show();
			break;
		}
		break;
		case '5':
		switch(tipe){
			case '+':
				ConvCount++;
				$("#txtRock").html('');
				$(".ansBox").hide();
				
				fillText(no, 'Thai', May[ConvCount]);
			break;
			case '=':
				$("#txtRock").html('');
				$(".ansBox").hide();
				
				fillText(no, 'Thai', May[ConvCount]);
			break;
			case '_':
				ConvCount++;
				QCount++;
				hideAll();
				$("#A").show();
			break;
			case 'x':
				hideAll();
				$("#A").show();
			break;
		}
		break;
		case '6':
		switch(tipe){
			case '+':
				ConvCount++;
				$("#txtMayor").html('');
				$(".ansBox").hide();
				
				fillText('6', 'Thomas', May[ConvCount]);
			break;
			case '=':
				$("#txtMayor").html('');
				$(".ansBox").hide();
				fillText('6', 'Thomas', May[ConvCount]);
			break;
			case '_':
				ConvCount++;
				QCount++;
				hideAll();
				$("#A").show();
			break;
			case 'x':
				hideAll();
				$("#A").show();
			break;
		}
		break;
	}
}

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