var disappear =function(){
	document.
	getElementById("hello").
	setAttribute("style",
		"background-color: red; "+
		"width: 200px; "+
		"display: none;");
}
var appear = function(){
	document.
	getElementById("hello").
	setAttribute("style",
		"background-color: red; "+
		"width: 200px; "+
		"display: inline-block;");
}
window.onload=function(){
	setTimeout(disappear,5000);
	setTimeout(appear,10000);
};