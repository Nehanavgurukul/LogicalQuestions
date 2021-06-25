var  obj = {"Gfg" : 4, "best" : 9}
var  arr = [2, 8]

let object = {}
var sobj = {}
var i = 0

for(x in obj){
    var sobj = {}
    sobj[x] = obj[x]
    let num = Number(arr[i])
    object[num] = sobj
    i++
}
console.log(object)