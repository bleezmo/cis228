function removeButton(){
	//get p tag that is to disappear
	var ptag = document.getElementById("disappearing");	
	//set the css display to none. this will make the tag disappear
	ptag.style.display = "none";
	//another way of doing it
	//ptag.setAttribute("style","display: none;");
}
window.onload = function(){
	//let's do some example of arrays and objects
	var myarr = [1,2,3,4];
	console.log(myarr);
	//select a element in the array
	console.log(myarr[2]);
	myarr = ["world",2,"hello",4];
	console.log(myarr[2]+" "+myarr[0]);
	//create an object using curly braces notation
	var myobj = {
		"x": 5,
		"y": 3	
	}
	//access the value of the property x in the object myobj
	console.log("The value of x is: "+myobj.x);
	//access the value of the property y in the object myobj, in a different way
	console.log("The value of y is: "+myobj["y"]);
	//another object with an array as the value
	var objarr = {
		x: 5,
		arr: ["world",2,"hello",4]
	}
	//print 'hello world' using objarr this time
	console.log(objarr.arr[2]+" "+objarr.arr[0]);
	//object with a function inside
	var objfunc = {
		y:3,
		myfunc: function(){
			console.log("i'm running inside a function, inside an object!")
		}
	}
	//execute the function
	objfunc.myfunc();
}