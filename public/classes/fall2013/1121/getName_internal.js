function getName(onload){
	var request = new XMLHttpRequest();
	request.open("GET", "/api/name")
	request.onload = function(){
		if(request.status == 200){
			onload(request.responseText)
		}
	}
	request.send();
}