function initialize() {
	var mapOptions = {
	  center: new google.maps.LatLng(-34.397, 150.644),
	  zoom: 8
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"),
	    mapOptions);

	google.maps.event.addListener(map,'mouseup',
	function(event){
		var ptag = document.getElementById("requesturl")
		
		ptag.innerHTML = 
		"http://cis228.herokuapp.com/api/ietf/distance?lat="+
		event.latLng.lat()+
		"&lon="+event.latLng.lng()

		console.log("longitude,latitude: "+
			event.latLng.lng()+","+event.latLng.lat());
	});

}
window.onload = initialize