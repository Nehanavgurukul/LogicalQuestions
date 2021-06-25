var dict1 = {'Ten': 10, 'Twenty': 20, 'Thirty': 30}
var dict2 = {'Thirty': 30, 'Fourty': 40, 'Fifty': 50}

var dict3 = {}

for(x in dict1){
    dict3[x] = dict1[x]
}

for(y in dict2){
    dict3[y] = dict2[y]
}

console.log(dict3)