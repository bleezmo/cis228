var count = 0;
var obj = {
	x: function(){
		console.log("hello world");
	},
	y: function(){
		console.log("hello platypus");
	}
}
function changeToBlue(){
	if(count == 0) return;
	var ptag = document.getElementById("ptag"+count);
	ptag.setAttribute("style","color: blue;");
}

function changeToGreen(){
	if(count == 0) return;
	var ptag = document.getElementById("ptag"+count);
	ptag.setAttribute("style","color: green;");
}
function addText(){
	var mydiv = document.getElementById("mydiv");
	var ptag = document.createElement("p");
	count++;
	ptag.setAttribute("id","ptag"+count);
	var input = document.getElementById("mytext")
	ptag.innerHTML = input.value
	mydiv.appendChild(ptag);
}
function execute(){
	var ptag = document.getElementById("ptag"+count);
	var prop = ptag.innerHTML;
	obj[prop]();
}