window.onload = function (){
	var mytext = document.getElementById("mytext");
	mytext.innerHTML = "hello world";

	changeMyTextClassText("hello world");

	var myPTag = document.getElementsByTagName("p")
	for(var i = 0; i < myPTag.length; i++){
		myPTag[i].innerHTML = "hello p"
	}
	function changeMyTextClassText(str){
		var myTextClass = document.getElementsByClassName("myTextClass");
		for(var i = 0; i < myTextClass.length; i++){
			myTextClass[i].innerHTML = str;
		}
	}
	var btn = document.getElementById("mybtn")
	btn.onclick = function(){
		changeMyTextClassText("Hello class")
	}
	var btn2 = document.getElementById("mybtn2")
	btn2.onclick = function(){
		changeMyTextClassText("Hello world")
	}
}

