var obj = {1: ['jean castrol'], 2:['lula Powell'],3:['brain howell'],4:['lynne foster'],5:['zachary simon']}

var object = {}
var array = []
for (x in obj){
    object[x] = obj[x][0]
    
}
array.push(object)
console.log(array)

