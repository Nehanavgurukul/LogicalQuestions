// const { setFlagsFromString } = require("v8");

let str = "NEHAYA";
let emplist = []
let big_list = []
for (x in str){
    let c = 0;
    small_list = []
    if(!emplist.includes(str[x])){
        emplist.push(str[x])
        for (y in str){
            if(str[x] == str[y]){
                c++;
            }
        }
        small_list.push(str[x])
        small_list.push(c)
    }
    if(small_list.length > 0){
        big_list.push(small_list)
    }
}
console.log(big_list)