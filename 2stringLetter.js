//logical one ques here we have to find two starting and ending letter from a string?
// if string is lenn than 2 then string and reverse string

let readline = require("readline-sync");
let str = readline.question("Enter the any string--");
if(str.length > 2){
    var index1 = str.length - 1
    var index2 = str.length - 2
    var i = 0
    var j = 1
    let newstr1 = str[i]+str[j]
    let newstr2 = str[index2]+str[index1]
    console.log(newstr1+newstr2)
    // console.log(newstr2);
}else{
    console.log(str+str[1]+str[0])
}