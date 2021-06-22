var obj1 = {1:10,2:20}
var obj2 = {3:30,4:40}
var obj3 = {5:50,6:60}
var array = []
array.push(obj1)
array.push(obj2)
array.push(obj3)
var obj4 = {};
for (x in array){
    for (y in array[x]){
        obj4[y] = array[x][y]
    }
}
console.log(obj4)