var string = "1234abcd"
var index = string.length - 1
var i = 0
let newstr = ""
while(i < string.length){
    newstr = newstr + string[index]
    index--
    i++
}

console.log(newstr);
