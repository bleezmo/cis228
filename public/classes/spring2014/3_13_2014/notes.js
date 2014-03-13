var counter = 0;
//this function executes each time the Click Me! button is clicked
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
//this function executes each time the Look Inside button is clicked
function lookInside(){
	counter2++;
	if(counter2 < 10){
		//create the button element
		var btn = document.createElement("button");
		//set the text of the button
		btn.innerHTML = "Look Inside"
		//set the onclick attribute to mirror that of the original Look Inside button
		btn.setAttribute("onclick","lookInside()");
		//add the button to the document
		document.body.appendChild(btn);
	}
}
