var string = "w3resource"
var object = {}
for(x of string){
    var count = 0
    for(y of string){
        if(y == x){
            count++
        }
    }
    object[x] = String(count)
    // console.log(string[x])
}
console.log(object)

//{ '3': '1', w: '1', r: '2', e: '2', s: '1', o: '1', u: '1', c: '1' } output