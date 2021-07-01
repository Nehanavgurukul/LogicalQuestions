const readline = require("readline-sync")
//switch statement with int .....
const num = readline.questionInt("enter the num --")

switch (num){
    case 1:
        console.log("first");
        break;
    case 2:
        console.log("second");
        break;
    case 3:
        console.log("third");
        break;
    default:
        console.log("nothing to get ")
}


// switch statement with character....
const str = readline.question("enter the num --")
switch(str){
    case "abcd" :
        console.log("a");
        break;
    case "bcde" :
        console.log("b");
        break;
    case "cdef" :
        console.log("c");
    default:
        console.log("nothing")
}



