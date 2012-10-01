function hideAll(){
		$("#A").hide();
		$("#B").hide();
		$("#C").hide();
		
		$("#B1").hide();
		$("#B2").hide();
		$("#B3").hide();
		$("#B4").hide();
		$("#B5").hide();
		$("#B6").hide();
		
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
				$('#aWoo4').hide();
				$('#aWoo5').hide();
				$('#aWoo6').hide();
				$('#aWoo1').html(aMay1[ConvCount].substring(2,aMay1[ConvCount].length));
				$('#aWoo2').html(aMay2[ConvCount].substring(2,aMay2[ConvCount].length));
				$('#aWoo3').html(aMay3[ConvCount].substring(2,aMay3[ConvCount].length));
				
				if(aMay1[ConvCount]==''){
					$('#aWoo1').hide();
				}else{
					$('#aWoo1').show();
				}
				
				if(aMay2[ConvCount]=='' ){
					$('#aWoo2').hide();
				}else{
					$('#aWoo2').show();
				}
				
				if(aMay3[ConvCount]=='' ){
					$('#aWoo3').hide();
				}else{
					$('#aWoo3').show();
				}
			}else{
				$('#aWoo1').hide();
				$('#aWoo2').hide();
				$('#aWoo3').hide();
				$('#aWoo4').show();
				$('#aWoo5').show();
				$('#aWoo6').show();
				$('#aWoo4').html('Aku ingin Menebang Pohon!');
				$('#aWoo5').html('Aku ingin bertanya tentang...');
				$('#aWoo6').html('Aku akan kembali lagi nanti.');
			}
		break;
		case "2":

		break;
		case "3":

		break;
		case "4":

		break;
		case "5":

		break;
		case "6":
			$('#boxMayor').show();
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
							fillText('6', 'Thomas', Mayor[ConvCount]);
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
				$("#txtWoody").html('');
				$(".ansBox").hide('');
				fillText(no, 'Woody', May[ConvCount]);
			break;
			case '=':
				$("#txtWoody").html('');
				$(".ansBox").hide('');
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
		case '6':
		switch(tipe){
			case '+':
				ConvCount++;
				$("#txtMayor").html('');
				$(".ansBox").hide('');
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