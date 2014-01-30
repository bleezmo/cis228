function init(){
	var request = new XMLHttpRequest()
	request.open("GET","/api/name",false)
	request.send()
	var name = request.responseText
	document.getElementById("ptag").innerHTML = "My name is: "+name
}

window.onload = init