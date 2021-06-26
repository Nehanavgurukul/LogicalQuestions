var obj = {"asdf" : "tyui","rghj" : "pujn"}
var new_obj = {}
for(x in obj){
    var a = x
    var b = x.length - 1
    var c = " "
    var d = " "
    var i = 0
    while(i < x.length){
        c = c + x[b]
        d = d + obj[x][b]
        i++;
        b--;
    }
    new_obj[d] = c
}
console.log(new_obj)
// output { 'iuyt': ' fdsa', ' njup': ' jhgr' }