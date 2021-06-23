const readline =require("readline-sync")
const user = readline.question("Enter the ur key choise--")
var obj = {"name" : "neha","age" :"23","class" : "BSc 1st"};
var array = []
for(x in obj){
    array.push(x)
}

if(!array.includes(user)){
    console.log("welcome to you & choise one value for ur key.")
    var value = readline.question("enter the value--");
    obj[user] = value
}else{
    console.log("key is already existe .")
}
console.log(obj)