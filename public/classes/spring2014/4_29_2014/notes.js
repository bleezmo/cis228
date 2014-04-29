function getName(){
	var request = new XMLHttpRequest();
	request.open("GET",
		"/api/json/name",
		true);
	request.send();
	request.onload = function(){
		document.getElementById("pname").innerHTML = 
			JSON.parse(request.responseText).name;
	}
}
function setName(){
	var name = document.getElementById("name").value
	var request = new XMLHttpRequest();
	request.open("POST",
		"/api/name",
		true);
	request.setRequestHeader("Content-type", 
		"application/x-www-form-urlencoded");
	request.send("name="+name);
}