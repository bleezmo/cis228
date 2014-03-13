var counter = 0;
function myOnClick(){
	counter++;
	document.getElementById("clicktracker").
		innerHTML = counter + " button clicks";

}
window.onload = function(){
	document.getElementById("clicktracker")
		.innerHTML = "0 button clicks";
}
var counter2 = 0;
function lookInside(){
	counter2++;
	if(counter2 < 10){
		var btn = document.createElement("button");
		btn.innerHTML = "Look Inside"
		btn.setAttribute("onclick","lookInside()");
		document.body.appendChild(btn);
	}
}
