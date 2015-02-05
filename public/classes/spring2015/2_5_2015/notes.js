function main(x){
    for(var i = 0; i < x; i++){
        if(i >= 2){
            console.log("Hello World");
        }
        else if(i == 1){
            console.log("second loop");
        }
        else{
            console.log("first loop");
        }
    }
}
/*var x = [1,2,3,4];
var y = ["hello","world"];
console.log(x);
console.log(y);*/
main(5);