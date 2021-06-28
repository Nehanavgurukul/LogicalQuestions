let str = "NEHAYADAV";
let obj = {}

for(x in str){
    let c = 0;
    small_list = []
    for (y in str){
        if(str[x] == str[y]){
            c++;
        }
    }
    small_list.push(str[x])
    small_list.push(c)
    if(small_list.length > 0){
        obj[str[x]] = c
    }
}
console.log(obj)