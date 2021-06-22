var array = [34,5,6,34,61,27,9,21,6,61,27,27]

var array1 = []
var i = 0
while(i < array.length){
    var d = array[i]
    if(!array1.includes(d)){
        array1.push(d)
    }
    i++
}
console.log(array1)


