var displayingTrex = false;
var displayingRaptor = false;
var displayingPterodactyl = false;

function checkButtonStatus(){
	if(displayingTrex && displayingRaptor && displayingPterodactyl){
		var btnTrex = document.getElementById("trex");
		var btnRaptor = document.getElementById("raptor");
		var btnPterodactyl = document.getElementById("pterodactyl");
		btnTrex.setAttribute("style","display: none;");
		btnRaptor.setAttribute("style","display: none;");
		btnPterodactyl.setAttribute("style","display: none;");
	}
}
function displayTrex(){
	displayingTrex = true;
	checkButtonStatus();
	var img = document.createElement("img");
	img.setAttribute("src","http://crenshawcomm.com/wp-content/uploads/2011/10/trex-300x280.jpg");
	var thediv = document.getElementById("myimages");
	thediv.appendChild(img);
	var btn = document.getElementById("trex")
	btn.innerHTML = "displaying "+btn.innerHTML;
}
function displayRaptor(){
	displayingRaptor = true;
	checkButtonStatus();
	var img = document.createElement("img");
	img.setAttribute("src","http://www.eatthedamncake.com/wordpress/wp-content/uploads/2012/02/velociraptor.jpg");
	var thediv = document.getElementById("myimages");
	thediv.appendChild(img);
	var btn = document.getElementById("raptor")
	btn.innerHTML = "displaying "+btn.innerHTML;
}
function displayPterodactyl(){
	displayingPterodactyl = true;
	checkButtonStatus();
	var img = document.createElement("img");
	img.setAttribute("src","http://cryptomundo.com/wp-content/uploads/papo_ptero.JPG");
	var thediv = document.getElementById("myimages");
	thediv.appendChild(img);
	var btn = document.getElementById("pterodactyl")
	btn.innerHTML = "displaying "+btn.innerHTML;
}