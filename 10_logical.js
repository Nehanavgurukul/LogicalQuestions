var readlinesync = require("readline-sync")
var number = readlinesync.question("enter the number --")
var num2 = Number(number)
var  num = num2
var num1 = num2
// console.log(typeof(num2))


var c = 0
while (0 < num){
    if(num % 2 ==  0){

        console.log(num)
        c = c + 1;
        num = num - 1;
        if(c === 3){
            break
        }
        

    }else {
        num = num - 1
    }
}

var d = 0;
while( 0 < num1){
    if(num1 % 2 != 0){
        console.log(num1);
        num1 = num1 + 1;
        d = d + 1;
        if(d === 3){
            break
        }
    }else{
        num1 = num1 + 1
    }
}
