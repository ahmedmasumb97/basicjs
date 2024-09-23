// block scope
// Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.

// ES6 introduced two important new JavaScript keywords: let and const.

// These two keywords provide Block Scope in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block:


{
    let q1 = 'let q';
    const q2 = 'const q';
    var q3 = 'var q';
    // var is functional block
    // console.log(ven1)
    
}

console.log(q3); // Output: var q

// decesion : var is not blocked scope but both let and constent are blocked scope

// console.log(ven1)


// global scope

let e1 = 'let e1 global';
var e2 = 'var e2 global';
const e3 = 'const e3 global';


{
    console.log(e1)
    console.log(e2)
    console.log(e3)
    // var is not block scope when it write in block scope
    // it can access from global and another block scope
    console.log(q3)
}

function test(){
console.log(e1)
console.log(e2)
console.log(e3)
// var is not block scope
console.log(q3)
var ven1 = 'i am var from function block scope'
}

test()


function test2(){
    // var is functional block scope
    // console.log(ven1)
}

test2()

// console.log(ven1) // Output: i am var from function block scope




// main descision for let : when create var in global scope it can access global and even let and const also

// but when create var in block it can access global and var in block scope and enven functional block scope
