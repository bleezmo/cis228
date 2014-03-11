function greetings(){
	console.log("function1");
}
var greetings2 = function(){
	console.log("function2");
}
//prints out 'function2'
greetings2();
greetings2 = greetings;
//prints out 'function1' because i have reassigned greetings 2
greetings2();

function personGreeting(name){
	var str = "Hello "+name;
	return str;
}
var mygreeting = personGreeting("josh")
//prints "Hello josh"
console.log(mygreeting);
function add(x,y){
	return x + y;
}
//add returns the result of adding 5 and 3.
//console will print out the value 8
console.log(add(5,3));

//we assume func is a function that takes in two arguments
function mathfunc(x,y,func){
	return func(x,y);
}
function subtract(x,y){
	return x - y;
}
//this will return the subtraction of 5 and 3
//console will print out the value 2
console.log(mathfunc(5,3,subtract));