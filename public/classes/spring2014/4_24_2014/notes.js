function getName(){
	var request = new XMLHttpRequest();
	request.open("GET",
		"/api/name",
		true);
	request.send();
	request.onload = function(){
		console.log("got responseText")
		document.getElementById("pname").innerHTML = 
			request.responseText;
	}
	console.log("end function")
}