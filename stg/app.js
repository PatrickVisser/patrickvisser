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
		y: 310,
		width: 398,
		height: 86,
		opacity: 0
});	

pwdField = new ImageView ({
	"image": "images/pwdfield.png",
		x: 122,
		y: 130,
		width: 398,
		height: 86,
		opacity: 0
});	

cardfield = new ImageView ({
	"image": "images/cardfield.png",
		x: 122,
		y: 310,
		width: 398,
		height: 86
});	

numPad = new ImageView({
	"image": "images/numkeys.png",
	x:0,
	y:1165,
	width: 640,
	height: 520
});

forgot = new View({
	x:122,
	y: 440,
	height: 30,
	width: 390,
	opacity: 0
})

rememberMe = new ImageView({
	"image": "images/rememberme.png",
	x:194,
	y: 490,
	height: 52,
	width: 236,
	opacity: 0
})

forgot.html = "Forgot your details?";
forgot.style.color = "#004634";
forgot.style.textAlign = "center";
forgot.style.fontSize = "24px";



// Fields In Animation //

cardfield.on("click", function() {
	
	secField.y = 130;
	pwdField.y = 230;
	
	avatar.animate ({
		properties: {y:-180},
		 curve: animationUp,
		time: 250
})

 utils.delay(100, function() {
    revealAnimation(
      firstName,
      { y: -224,  }
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
      { y: 572,  }
    );
  });
  
  utils.delay(300, function() {
    revealAnimation(
      secField,
      { y: 230, opacity: 1  }
    );
  });
  
   utils.delay(400, function() {
    revealAnimation(
      pwdField,
      { y: 330, opacity: 1  }
    );
  });
    utils.delay(300, function() {
    revealAnimation(
      forgot,
      { opacity: 1  }
    );
  });
  
      utils.delay(300, function() {
    revealAnimation(
      rememberMe,
      { opacity: 1  }
    );
  });
  

})

// Fields out animation

numPad.on("click", function() {

 utils.delay(300, function() {
    revealAnimation(
      avatar,
      { y: 11,  }
    );
  });

 utils.delay(100, function() {
    revealAnimation(
      cardfield,
      { y: 310,  }
    );
  });
  

 utils.delay(300, function() {
    revealAnimation(
      firstName,
      { y: 240,  }
    );
  });
  


utils.delay(200, function() {
    revealAnimation(
      numPad,
      { y: 1165,  }
    );
  });
  
  utils.delay(100, function() {
    revealAnimation(
      secField,
      { y: 310, opacity: 0  }
    );
  });
  
   utils.delay(00, function() {
    revealAnimation(
      pwdField,
      { y: 310, opacity: 0  }
    );
  });
    utils.delay(300, function() {
    revealAnimation(
      forgot,
      { opacity: 0  }
    );
  });
  
      utils.delay(300, function() {
    revealAnimation(
      rememberMe,
      { opacity: 0  }
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

 
 


