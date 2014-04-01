var count = 0;
function getText(mytext){
	return mytext+"!!!";
}
function differentButton(){
	var mybtn = document.getElementById("mybtn");
	count++;
	if(count == 5){
		changeDivText();
	}
	mybtn.innerHTML = "You've clicked me "+count+" times";
}
function changeDivText(){
	var mydiv = document.getElementById("mydiv");
	mydiv.innerHTML = "Stop clicking me"
}
window.onload = function(){
	var div = document.getElementById("mydiv");
	div.innerHTML = getText("Hello World");
	var btn = document.createElement("button");
	btn.setAttribute("onclick","differentButton()");
	btn.setAttribute("id","mybtn");
	btn.innerHTML = "Click Me";
	document.body.appendChild(btn);
}