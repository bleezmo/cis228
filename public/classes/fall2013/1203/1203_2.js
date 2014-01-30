function getName(){
	var request = new XMLHttpRequest()
	request.open("GET","/api/name",false)
	request.send()
	var name = request.responseText
	document.getElementById("ptag").innerHTML = "My name is: "+name
}
//this retrieves the name from the server every 2 seconds
//setInterval(getName,2000)