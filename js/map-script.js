
	'use strict';

	// CHECK WINDOW RESIZE
	var is_windowresize = false;
	$(window).resize(function(){
		is_windowresize = true;
	});


	//INITIALIZE MAP
	function initialize() {
		var catedral = {lat: -34.46700, lng: -58.50921};
		var salon = {lat: -34.4136827, lng: -58.7179776};
		var civil = {lat: -34.47381, lng: -58.51235};

		var center = {lat: (-34.47381-34.4136827)/2, lng: (-58.51235-58.7179776)/2};

		//DEFINE MAP OPTIONS
		//=======================================================================================
  		var mapOptions = {
				zoom: 12,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				center: center, //new google.maps.LatLng(-34.4670016, -58.5097596),
				panControl: true,
				zoomControl: true,
				mapTypeControl: true,
				//scaleControl: false,
				streetViewControl: true,
				overviewMapControl: true,
				//rotateControl:true
  		};

		//CREATE NEW MAP
		//=======================================================================================
  		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		//MARKER ICON
		//=======================================================================================
		//var image = 'facebook30.svg';

		//ADD NEW MARKER
		//=======================================================================================
  		/*var marker = new google.maps.Marker({
    		position: map.getCenter(),
   		 	map: map,
    		title: 'Click to zoom',
			icon: image
  		});

		var marker1 = new google.maps.Marker({
    		position: new google.maps.LatLng(-12.042559, -77.027426),
   		 	map: map,
    		title: 'Click to zoom'
  		});*/


		//ADD NEW MARKER WITH LABEL
		//=======================================================================================
		var markerCivil = new google.maps.Marker({
			position: civil,
			map: map,
			// label: 'Hello World!',
			animation: google.maps.Animation.DROP,
			icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
		});

		var markerCatedral = new google.maps.Marker({
	      position: catedral,
	      map: map,
	      title: 'Hello World!',
		  animation: google.maps.Animation.DROP,
		  icon: 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png'
	    });

		var markerSalon = new google.maps.Marker({
			position: salon,
			map: map,
			title: 'Hello World!',
			animation: google.maps.Animation.DROP,
			icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
		});

		//
		// var marker2 = new MarkerWithLabel({
    //    		position: new google.maps.LatLng(-12.046040, -77.029269),
    //    		draggable: false,
    //    		raiseOnDrag: false,
    //    		icon: ' ',
    //    		map: map,
    //      	labelContent: '<div class="de-icon circle small-size" style="background-color:#6a6a6a"><i class="de-icon-taxi"></i></div>',
    //    		labelAnchor: new google.maps.Point(0, 0),
    //    		labelClass: "labels" // the CSS class for the label
    //  		});
		//
		// var marker3 = new MarkerWithLabel({
    //    		position: new google.maps.LatLng(-12.045909, -77.031712),
    //    		draggable: false,
    //    		raiseOnDrag: false,
    //    		icon: ' ',
    //    		map: map,
    //      	labelContent: '<div class="de-icon circle small-size" style="background-color:#67a80e"><i class="de-icon-food"></i></div>',
    //    		labelAnchor: new google.maps.Point(0, 0),
    //    		labelClass: "labels" // the CSS class for the label
    //  		});
		//
		// var marker4 = new MarkerWithLabel({
    //    		position: new google.maps.LatLng(-12.046617, -77.030567	),
    //    		draggable: false,
    //    		raiseOnDrag: false,
    //    		icon: ' ',
    //    		map: map,
    //      	labelContent: '<div class="de-icon circle small-size" style="background-color:#c89d1b"><i class="de-icon-coffee"></i></div>',
    //    		labelAnchor: new google.maps.Point(0, 0),
    //    		labelClass: "labels" // the CSS class for the label
    //  		});
		//
		// var marker5 = new MarkerWithLabel({
    //    		position: new google.maps.LatLng(-12.045857, -77.032538),
    //    		draggable: false,
    //    		raiseOnDrag: false,
    //    		icon: ' ',
    //    		map: map,
    //      	labelContent: '<div class="de-icon circle small-size" style="background-color:#f0394d"><i class="de-icon-basket"></i></div>',
    //    		labelAnchor: new google.maps.Point(0, 0),
    //    		labelClass: "labels" // the CSS class for the label
    //  		});
		//
		// var marker6 = new MarkerWithLabel({
    //    		position: new google.maps.LatLng(-12.046053, -77.028732),
    //    		draggable: false,
    //    		raiseOnDrag: false,
    //    		icon: ' ',
    //    		map: map,
    //      	labelContent: '<div class="de-icon circle small-size" style="background-color:#f6700e"><i class="de-icon-paper-plane"></i></div>',
    //    		labelAnchor: new google.maps.Point(0, 0),
    //    		labelClass: "labels" // the CSS class for the label
    //  		});
		//
		// var marker7 = new MarkerWithLabel({
    //    		position: new google.maps.LatLng(-12.045363, -77.029939),
    //    		draggable: false,
    //    		raiseOnDrag: false,
    //    		icon: ' ',
    //    		map: map,
    //      	labelContent: '<div class="de-icon circle small-size" style="background-color:#0d9a48"><i class="de-icon-tree"></i></div>',
    //    		labelAnchor: new google.maps.Point(0, 0),
    //    		labelClass: "labels" // the CSS class for the label
    //  		});
    // 	//marker.setMap( map );


		//INFO WINDOWS
		//=======================================================================================
		// var contentString = '<div>'+
		// 'WEDDING CEREMONY';
    //   	'</div>';
		//
		// var contentString1 = '<div>'+
		// 'WEDDING PARTY';
    //   	'</div>';
		//
		//  	var infowindow = new google.maps.InfoWindow({
    //   		content: contentString
  	// 	});
		//
		// var infowindow1 = new google.maps.InfoWindow({
    //   		content: contentString1
  	// 	});



		//OPEN INFO WINDOWS ON LOAD
		//=======================================================================================
  		// infowindow.open(map,marker1);

		//ON CLICK MARKER, OPEN INFO WINDOWS
		//=======================================================================================
		// google.maps.event.addListener(marker1, 'click', function() {
  	// 		infowindow.open(map,marker1);
  	// 	});

		//ON MARKER CLICK EVENTS
		//=======================================================================================
  		/*google.maps.event.addListener(marker, 'click', function() {
   	 		map.setZoom(17);
    		map.setCenter(marker.getPosition());
			infowindow.open(map,marker);
  		});

		google.maps.event.addListener(marker1, 'click', function() {
   	 		map.setZoom(17);
    		map.setCenter(marker.getPosition());
			infowindow1.open(map,marker1);
  		});

		google.maps.event.addListener(marker2, 'click', function() {
   	 		map.setZoom(17);
    		map.setCenter(marker.getPosition());
			infowindow1.open(map,marker2);
  		});*/

		//ON BOUND EVENTS AND WINDOW RESIZE
		//=======================================================================================
	// 	google.maps.event.addListener(map, 'bounds_changed', function() {
	// 		if (is_windowresize)
	// 		{
	// 			//map.setCenter(marker.getPosition());
	// 			window.setTimeout(function() {
  //     				map.panTo(marker1.getPosition());
  //   			}, 500);
	// 		}
	// 		is_windowresize=false;
	// 	});
	}

	// LOAD GMAP
	google.maps.event.addDomListener(window, 'load', initialize);
