const readlinesync = require ("readline-sync")
const number = readlinesync.question("enter the number--")

var array = []
var index = 1;
while(index <= number) {
    const number1 = readlinesync.question("enter the number--")
    if(number1 % index == 0 ){
        array.push(number1)
        index ++;

    }else{
        console.log("not divisible number...");
        index++;
    }
}
console.log(array)



