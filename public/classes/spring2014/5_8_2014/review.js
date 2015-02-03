function Color(x){
	this.color = x;
	this.setColor = function(color){
		this.color = color;
	}
	this.getColor = function(){
		return this.color;
	}
}
var c = new Color("green");
c.setColor("red");
var result = c.getColor();
console.log(result);