// function spreadfun(n1,n2,n3,n4,n5){
//     console.log(n5)
//     return n1+n2+n3+n4
// }
// let arr = [4,6,8,2,5,2,8,]
// var a = spreadfun(...arr)
// console.log(a)



function spreadfun(n1,...num){
    console.log(n1)
    console.log(num)
    // return n1+n2+n3+n4
}
let arr = [4,6,8,2,5,2,8,]
var a = spreadfun(...arr)
console.log(a)

