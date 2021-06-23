

var array1 = [[34,5,7,23,78],[-54,-976,-2,0],[76,34,91,5,32]]
var new_array = []
for(x of array1){
    var max = x[0]
    for(y of x){
        if(y > max){
            max = y
        }
    }
    new_array.push(max)
}
console.log(new_array);