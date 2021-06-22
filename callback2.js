function fun1 (value) {
    return value;

}

function fun2 (n1, n2, callback) {
    const num = n1 + n2
    return callback(num)
}

const newvalue = fun2(3, 5, fun1);
console.log(newvalue);