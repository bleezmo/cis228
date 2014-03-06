//prints hello world to console window in browser tools
console.log("Hello World");
//displays alert dialog
//alert("Hello World");
var x = "Hello Novice Programmers";
console.log(x);
var y = 5;
var z = 25;
x = y + z;
console.log(x);
console.log(typeof(x));
console.log(typeof(30.3333));
if(x == 30){
	console.log("we found out x is 30");
}
if(y == 30){
	console.log("this never runs");
}else{
	console.log("this should definitely run");
}
for(var i = 0; i < 10; i++){
	console.log("The value of i is: "+i);
}
var count = 0;
while(count < 5){
	console.log("The value of count is: "+count);
	count++;
}
function myfunc(){
	console.log("This function has executed");
}
myfunc();
window.onload = function(){
	document.getElementById("myptag").innerHTML = "Hello World!";
}