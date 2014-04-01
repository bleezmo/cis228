function displayLocation(location) {
	var lat = location.coords.latitude;
	var lon = location.coords.longitude;
	var mapOptions = {
	  center: new google.maps.LatLng(lat, lon),
	  zoom: 14
	};
	var map = new google.maps.Map(
		document.getElementById("map-canvas"),
	    mapOptions);
}
function initialize(){
	navigator.geolocation.getCurrentPosition(displayLocation);
}
window.onload=initialize