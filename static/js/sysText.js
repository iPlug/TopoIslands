function fillText(name, data){
		
		var i=1;
		var TimerText = setInterval(function(){
			fillNow(name, data.substring(0, i));
			textNoise.play();
			if(i==data.length){
				clearInterval(TimerText);
			}
			i++;
		},25);
	}
	
function cleanTxt(){
	$(".txtBox").html('');
}
	
function fillNow(name, text){
	$(".txtBox").html('<span class="label label-important">' + name + '</span><br /><p class="triangle-border left">' + text + '</p>');
}
