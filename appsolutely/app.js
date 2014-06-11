myLayers = Framer.Importer.load("imported/Appsolutely_framer_02")

myLayers.toggle_ad.visible = false;
myLayers.field_rev.visible = false;
myLayers.field_adbudget.opacity = 0.5;
myLayers.field_pricing.x = 640;

myLayers.tab_mkt_off.visible = false;

// toggle switch
myLayers.toggle_inst.on("click", function () {
myLayers.toggle_inst.visible = false;
myLayers.toggle_ad.visible = true;
myLayers.field_adbudget.opacity = 1;
myLayers.field_install.opacity = 0.5;

})

myLayers.toggle_ad.on("click", function () {
myLayers.toggle_inst.visible = true;
myLayers.toggle_ad.visible = false;
myLayers.field_adbudget.opacity = 0.5;
myLayers.field_install.opacity = 1;

})

// Marketing

myLayers.tab_mkt_off.on("click", function () {
	myLayers.tab_pric_off.visible = true
	myLayers.tab_ad_off.visible = true;
		myLayers.tab_mkt_off.visible = false;
myLayers.togglelabel.visible = true;
	myLayers.toggle_inst.visible = true;
	myLayers.toggle_ad.visible = false;

	///Animate Fields
	myLayers.field_ads.animate ({
		properties: {x:42},
		time: 0.3,
				curve: 'spring',
    curveOptions: {
      tension: 300,
      friction: 50
    }
	})
	
	myLayers.field_adbudget.animate ({
		properties: {x:52},
		time: 0.3,
		curve: 'spring',
    curveOptions: {
      tension: 300,
      friction: 50
    }
	})

			myLayers.field_pricing.animate ({
		properties: {x:640},
		time: 0.3,
		curve: 'spring',
    	curveOptions: {
      		tension: 300,
      		friction: 50
    }
	})

	})

// Pricing

myLayers.tab_pric_off.on("click", function () {
	myLayers.tab_mkt_off.visible = true;
	myLayers.tab_pric_off.visible = false;
	myLayers.tab_ad_off.visible = true;
	
	myLayers.togglelabel.visible = false;
	myLayers.toggle_inst.visible = false;
	myLayers.toggle_ad.visible = false;

	///Animate Fields
	myLayers.field_ads.animate ({
		properties: {x:-640},
		time: 0.3,
		curve: 'spring',
    curveOptions: {
      tension: 300,
      friction: 50
    }
	})

	myLayers.field_adbudget.animate ({
		properties: {x:-640},
		time: 0.3,
		curve: 'spring',
    	curveOptions: {
      		tension: 300,
      		friction: 50
    }
	})

		myLayers.field_pricing.animate ({
		properties: {x:46},
		time: 0.3,
		curve: 'spring',
    	curveOptions: {
      		tension: 300,
      		friction: 50
    }
	})
	})

myLayers.tab_mkt_off.visible = false;

