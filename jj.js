// var array = [3,6,9,2,8]
var array1 = ["one","two","three","four","five"]
var array2 = [1,2,3,4,5]
var obj = {}

var i = 0
for (x of array1){
    obj[array2[i]] = x
    i++;
}
console.log(obj)