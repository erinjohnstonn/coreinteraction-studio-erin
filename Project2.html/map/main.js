function init () {
	console.log(('jjj'))
	/* here's how you setup the map to start */

	var startAtThisPosition = {lat: -25.363, lng: 131.044};

	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 2,
	  center: startAtThisPosition
	});

	/* here's how you add a marker */

	var markerPos = {lat: 35.00, lng: 38.00};

	var marker = new google.maps.Marker({
	  position: markerPos,
	  map: map,
	  title: 'Hello World!'
	});



	/* here's how you add another marker */

	var markerPos = {lat: 40.7128, lng: -74.005941
	};

	var marker = new google.maps.Marker({
	  position: markerPos,
	  map: map,
	  title: 'Hello World!'
	});

};


setTimeout(init, 5000);