var convo = [
	"Tom: Hi",
	"Joe: Hello",
	"Tom: How are you?",
	"Joe: I'm fine. How are you?",
	"Tom: I'm fine. Gotta go.",
	"Joe: Ok. Bye",
	"Tom: Bye"	
]
var count = 0;
function btnTalk(){
	var convodiv = document.getElementById("convodiv")	
	var ptag = document.createElement("p");
	ptag.innerHTML = convo[count]
	convodiv.appendChild(ptag)
	if(count == (convo.length - 1)){
		var talkbtn = document.getElementById("talkbtn")	
		talkbtn.setAttribute("style","display: none")
	}
	count+=1
}