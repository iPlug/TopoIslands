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
