function swtImg(name){
	$('.imgBox').html('<img src=/img/acc/box-'+ name +'.jpg width=120px height=125px />');
}

function fillText(name, data){		
	clearInterval(TimerText);
	var i=1;
	TimerText = setInterval(function(){
		fillNow(name, data.substring(0, i));
		textNoise.play();
		if(i==data.length){
			clearInterval(TimerText);
		}
		i++;
	},25);
	
	swtImg(name);
}
	
function cleanTxt(){
	$(".txtBox").html('');
}
	
function fillNow(name, text){
	$(".txtBox").html('<strong>' + name + ' : </strong><br /><p>' + text + '</p>');
}
