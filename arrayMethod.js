// fill method 
var arr = [3,6,9,2,5]
var arr1 = arr.fill(10)  // one way 
console.log(arr1)

arr.fill(10)            // second way 
console.log(arr)

var a = []
a.fill(2)               // it will not fill but work
console.log(a)

var arr = [3,6,9,2,5]
var arr1 = arr.fill(10,2,3)  // with starting and ending
console.log(arr1)

var arr = [3,6,9,2,5]
var arr1 = arr.fill(10 ,2)  // only staring 
console.log(arr1)


// filter method
var array = [23,5,6,3,56,86]
var arr1 = array.filter(x => x%2 ==0 )
console.log(arr1)

var array = [23,5,6,3,"r",56,"r",86]
var arr1 = array.filter(function my(x) {return x == "r"})    // filter  depend on our condition 
console.log(arr1)



var array = [23,5,6,3,56,86]
var arr1 = array.filter((x,y) => y%2 == 0 && x%3==0 )       // it will work  with both parameters
console.log(arr1)



// map method .
var array = [45,87,9,23,11]
var arr1 = array.map((item) => item**2)
console.log(arr1)                                            // it will work with arithmetic operator


var array = [45,87,9,23,11]
console.log(array.map((item) => item > 39))                 // if we will give condition it will give ans in boolean value



//reduce method
var arr = [10,5,55,62,10]
var multi = arr.reduce(function(x,y){
    return x * y ;
})
console.log(multi)
