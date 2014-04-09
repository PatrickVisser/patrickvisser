addEventListener('touchmove', function(e) { e.preventDefault(); }, true);

animationCurve = "spring(1500,30,500)"
animationOutCurve = "ease-in"
animationUp= "bezier-curve(0.6, -0.28, 0.735, 0.045)"


iphone = new View({
 x: 0,
 y: 0,
 width: 640,
 height: 1096
})

backGround = new ImageView ({
	"image": "images/background.png",
	width: 640	,
	height: 1096
});	

avatar = new ImageView ({
	"image": "images/avatar.png",
	x: 438,
	y: 11,
	width: 176,
	height: 176
});	

firstName = new ImageView ({
	"image": "images/name.png",
	x: 138,
	y: 224,
	width: 255,
	height: 48
});	


secField = new ImageView ({
	"image": "images/secfield.png",
		x: 122,
		y: 130,
		width: 396,
		height: 84,
		opacity: 0
});	

pwdField = new ImageView ({
	"image": "images/pwdfield.png",
		x: 122,
		y: 130,
		width: 396,
		height: 84,
		opacity: 0
});	

cardfield = new ImageView ({
	"image": "images/cardfield.png",
		x: 122,
		y: 310,
		width: 396,
		height: 84
});	

numPad = new ImageView({
	"image": "images/numkeys.png",
	x:0,
	y:1165,
	width: 640,
	height: 430
});

cardfield.on("click", function() {
	avatar.animate ({
		properties: {y:-180},
		 curve: animationUp,
		time: 250
})

 utils.delay(100, function() {
    revealAnimation(
      firstName,
      { y: -210,  }
    );
  });
  
   utils.delay(200, function() {
    revealAnimation(
      cardfield,
      { y: 130,  }
    );
  });

utils.delay(200, function() {
    revealAnimation(
      numPad,
      { y: 666,  }
    );
  });
  
  utils.delay(300, function() {
    revealAnimation(
      secField,
      { y: 230, opacity: 1  }
    );
  });
  
   utils.delay(300, function() {
    revealAnimation(
      pwdField,
      { y: 330, opacity: 1  }
    );
  });

})

//////////////////

  revealAnimation = function(view, prop) {
    view.animate({
      properties: prop,
      curve: "ease-in-out",
      time: 400
    });
  }

 
 


