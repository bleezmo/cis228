function locationListener(location){
	console.log(location);
}
navigator.geolocation.getCurrentPosition(locationListener)