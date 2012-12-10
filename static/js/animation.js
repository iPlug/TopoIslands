function animateBus(){
	hideAll();
	$('#animBus').fadeIn(1000);
	stage = new createjs.Stage('busCanvas');
	
	mcBoy = new createjs.BitmapAnimation(spriteSheet[0]);
	mcCat = new createjs.BitmapAnimation(spriteSheet[1]);
	
	// start playing the first sequence:
	mcBoy.gotoAndPlay("walk");     //animate
	mcCat.gotoAndPlay("walk");     //animate

	mcBoy.name = "myBoy";
	mcBoy.vX = 4;
	mcBoy.vY = 4;
	mcBoy.x = 300;
	mcBoy.y = 300;
	mcBoy.state = 1;
	
	mcBoy.onTick = function(){
		if(this.state==1){
			if(this.x<=600){
				this.x+=this.vX;
			}else if(this.state==1){
				this.gotoAndPlay('idle');	
				this.state=0;
				var timerAnm1 = setTimeout(function(){
					mcBoy.state=2;
					mcBoy.gotoAndPlay('walk');
				},3000);
			}
		}else if(this.state==2){
			if(this.x>=300){
				this.x-=this.vX;
			}else if(this.state==2){
				this.gotoAndPlay('idle');	
				this.state=0;
				var timerAnm1 = setTimeout(function(){
					mcBoy.state=1;
					mcBoy.gotoAndPlay('walk');
				},3000);
			}
		}
	}
	
	mcCat.name = "myCat";
	mcCat.state = 1;
	mcCat.vX = 4;
	mcCat.vY = 4;
	mcCat.x = 450;
	mcCat.y = 120;
	
	mcCat.onTick = function(){
		if(this.state==1){
			if(this.y<=250){
				this.y+=this.vY;
			}else if(this.state==1){
				this.gotoAndPlay('idle');	
				this.state=0;
				var timerAnm1 = setTimeout(function(){
					mcCat.state=2;
					mcCat.gotoAndPlay('walk');
				},7000);
			}
		}else if(this.state==2){
			if(this.y>=120){
				this.y-=this.vY;
			}else if(this.state==2){
				this.gotoAndPlay('idle');	
				this.state=0;
				var timerAnm1 = setTimeout(function(){
					mcCat.state=1;
					mcCat.gotoAndPlay('walk');
				},15000);
			}
		}
	}
			
	// have each monster start at a specific frame
	stage.addChild(mcBoy);
	stage.addChild(mcCat);
	
	createjs.Ticker.addListener(window);
	createjs.Ticker.useRAF = true;
	// Best Framerate targeted (60 FPS)
	createjs.Ticker.setFPS(4);
}

function animateRing(){
	hideAll();
	$('#animRing').fadeIn(1000);
	
	stage = new createjs.Stage('ringCanvas');
	
	mcHorn = new createjs.BitmapAnimation(spriteSheet[2]);
	mcPink = new createjs.BitmapAnimation(spriteSheet[3]);
	
	// start playing the first sequence:

	mcHorn.gotoAndPlay("walk");     //animate
	mcPink.gotoAndPlay("walk");     //animate
	
	mcHorn.name = "myHorn";
	mcHorn.vX = 8;
	mcHorn.vY = 4;
	mcHorn.x = 150;
	mcHorn.y = 120;
	mcHorn.state = 1;
	
	mcHorn.onTick = function(){
		if(this.state==1){
			if(this.x<=300){
				this.x+=this.vX;
				this.y+=this.vY;
			}else if(this.state==1){
				this.gotoAndPlay('idle');	
				this.state=0;
				var timerAnm1 = setTimeout(function(){
					mcHorn.state=2;
					mcHorn.gotoAndPlay('walk');
				},3000);
			}
		}else if(this.state==2){
			this.vY=7;
			if(this.y<=350){
				this.y+=this.vY;
			}else if(this.state==2){
				this.gotoAndPlay('idle');	
				this.state=0;
				var timerAnm1 = setTimeout(function(){
					mcHorn.state=3;
					mcHorn.gotoAndPlay('walk');
				},3000);
			}
		}else if(this.state==3){
			
			if(this.x>=150){
				this.x-=this.vX;
				this.y+=this.vY;
			}else if(this.state==2){
				this.gotoAndPlay('idle');	
				this.state=0;
			}
		}
	}
	
	mcPink.name = "myPink";
	mcPink.vX = 4;
	mcPink.vY = 2;
	mcPink.x = 600;
	mcPink.y = 230;
	mcPink.state = 1;
	
	mcPink.onTick = function(){
		if(this.state==1){
			if(this.x>=450){
				this.x-=this.vX;
				this.y-=this.vY;
			}else if(this.state==1){
				this.gotoAndPlay('idle');	
				this.state=0;
				var timerAnm1 = setTimeout(function(){
					mcPink.state=2;
					mcPink.gotoAndPlay('walk');
				},3000);
			}
		}else if(this.state==2){
			if(this.x>=320){
				this.x-=this.vX;
				this.y+=this.vY;
			}else if(this.state==2){
				this.gotoAndPlay('idle');	
				this.state=0;
				var timerAnm1 = setTimeout(function(){
					mcPink.state=3;
					mcPink.gotoAndPlay('walk');
				},3000);
			}
		}else if(this.state==3){
			this.vY=3;
			if(this.x>=150){
				this.x-=this.vX;
				this.y-=this.vY;
			}else if(this.state==2){
				this.gotoAndPlay('idle');	
				this.state=0;
			}
		}
	}
			
	// have each monster start at a specific frame
	stage.addChild(mcHorn);
	stage.addChild(mcPink);
	
	createjs.Ticker.addListener(window);
	createjs.Ticker.useRAF = true;
	// Best Framerate targeted (60 FPS)
	createjs.Ticker.setFPS(4);
}

function animateStar(){
	hideAll();
	$('#animStar').fadeIn(1000);
	
	stage = new createjs.Stage('starCanvas');
	
	mcBoy = new createjs.BitmapAnimation(spriteSheet[0]);
	mcPink = new createjs.BitmapAnimation(spriteSheet[3]);
	mcPrincess = new createjs.BitmapAnimation(spriteSheet[4]);
	
	// start playing the first sequence:
	mcBoy.gotoAndPlay("walk");     //animate
	mcPink.gotoAndPlay("idle");     //animate
	mcPrincess.gotoAndPlay("idle");     //animate

	mcBoy.name = "myBoy";
	mcBoy.vX = 8;
	mcBoy.vY = 4;
	mcBoy.x = 150;
	mcBoy.y = 120;
	mcBoy.state = 1;
	
	mcBoy.onTick = function(){
		if(this.state==1){
			if(this.x<=380){
				this.x+=this.vX;
				this.y+=this.vY;
			}else if(this.state==1){
				this.gotoAndPlay('idle');	
				this.state=0;
				var timerAnm1 = setTimeout(function(){
					mcBoy.state=2;
					mcBoy.gotoAndPlay('walk');
				},3000);
			}
		}else if(this.state==2){
			if(this.x>=150){
				this.x-=this.vX;
				this.y-=this.vY;
			}else if(this.state==2){
				this.gotoAndPlay('idle');	
				this.state=0;
				var timerAnm1 = setTimeout(function(){
					mcBoy.state=1;
					mcBoy.gotoAndPlay('walk');
				},3000);
			}
		}
	}
	
	mcPrincess.name = "myPrincess";
	mcPrincess.vX = 4;
	mcPrincess.vY = 4;
	mcPrincess.x = 460;
	mcPrincess.y = 310;
	mcPrincess.state = 1;
	
	mcPrincess.onTick = function(){
		if(this.state==1){
			this.gotoAndPlay('walk');	
			this.state=0;
			var timerAnm1 = setTimeout(function(){
				mcPrincess.state=2;
			},3000);
		}else if(this.state==2){
			this.gotoAndPlay('idle');	
			this.state=0;
			var timerAnm1 = setTimeout(function(){
				mcPrincess.state=1;
			},3000);
		}
	}
	
	// have each monster start at a specific frame
	stage.addChild(mcBoy);
	stage.addChild(mcPrincess);
	
	createjs.Ticker.addListener(window);
	createjs.Ticker.useRAF = true;
	// Best Framerate targeted (60 FPS)
	createjs.Ticker.setFPS(4);
}

function initCanvas(id){

}

function tick() {
    // update the stage:
	
    stage.update();
}