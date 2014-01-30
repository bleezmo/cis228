function getName(){
	var request = new XMLHttpRequest()
	request.open("GET","/api/name",true)
	request.send()
	console.log("timestamp 1 is: "+(new Date).getTime())
	request.onload = function(){
		var name = request.responseText
		console.log("responseText inside onload function: "+name)
		console.log("timestamp 2 is: "+(new Date).getTime())
		document.getElementById("ptag").innerHTML = "My name is: "+name
	}
	var name = request.responseText
	console.log("responseText outside onload function: "+name)
	console.log("timestamp 3 is: "+(new Date).getTime())
}
//this retrieves the name from the server every 2 seconds
//setInterval(getName,2000)

//request.onload()