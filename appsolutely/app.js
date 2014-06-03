myLayers = Framer.Importer.load("imported/Appsolutely_framer_01")

// Demo code
// Bounce all the views

myLayers.toggle_ad.visible = false;
myLayers.toggle_ad_off.visible = false;

myLayers.tab_mkt_off.visible = false;


// Marketing
myLayers.tab_mkt_off.on("click", function () {
myLayers.tab_mkt_off.visible = false;
myLayers.tab_pric_off.visible = true
myLayers.tab_ad_off.visible = true;

myLayers.toggle_inst.visible = true;
myLayers.toggle_ad_off.visible = false;

myLayers.fields.animate ({
		properties: {x:0},
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
myLayers.toggle_ad_off.visible = true;


myLayers.fields.animate ({
		properties: {x:-640},
		time: 0.3,
		curve: 'spring',
    curveOptions: {
      tension: 300,
      friction: 50
    }
	})
	})

// Ad Revenue

myLayers.tab_ad_off.on("click", function () {
myLayers.tab_mkt_off.visible = true;
myLayers.tab_pric_off.visible = true
myLayers.tab_ad_off.visible = false;

myLayers.fields.animate ({
		properties: {x:-1280},
		time: 0.3,
	curve: 'spring',
    curveOptions: {
      tension: 300,
      friction: 50
    }
	})

	})