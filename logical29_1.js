// const { read } = require("fs")
const readline = require("readline-sync")
const num = readline.questionInt("enter the num--")

let new_obj = {}
for (var i = 1; i<=num; i++){
    new_obj[i] = i*i
}
console.log(new_obj)





