var arr = ["abc", "45", "23", "bye","10"]
var arr1 = []
for (var x in arr){
    var b = Number(arr[x])
    var d = String(b)
    if(d === "NaN"){
        arr1.push("String")
    }else{
        arr1.push("Number")
    }
}
console.log(arr1)



