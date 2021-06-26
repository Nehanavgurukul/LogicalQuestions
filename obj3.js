let obj = {
    "A" : [4,6,8,2],
    "B" : [6,2,8,4]
}

let obj1 = {}

for (x in obj){
    var a = obj[x]
    var index = a.length - 1
    var array = []
    var i = 0
    while(i < a.length){
        array.push(a[index])
        i++;
        index --;
    }
    obj1[x] = array
}
console.log(obj1)