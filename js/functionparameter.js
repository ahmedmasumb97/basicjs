// function parameters

// 1.A JavaScript function does not perform any checking on parameter values (arguments).

// 2. paremeter is Function parameters are the names listed in the function definition.it is contains functions defination that means function body.

// 3. arguments are acctual value of parameter from passing function calling



// parameters rules

// 1.JavaScript function definitions do not specify data types for parameters.

// 2.JavaScript functions do not perform type checking on the passed arguments.

// 3.JavaScript functions do not check the number of arguments received.



// example
// this is function body ,here function do not execute
// x,y is the function parameter
// never user ; after the function defination or body and it can get errors
// can add defult parameters like y =  5 if missing parameters arguments(value) when functional parameter and it automatically set the value of parameter like y = 5 
// when use length the function it returns how many parameters have its own


function mynewFunction(x,y=5){
    return x+y

}

// function calling or invoketion
// those values are called (20,20) arguments

mynewFunction(10,20) // this will work fine




// The Arguments Object
// JavaScript functions have a built-in object called the arguments object.

// The argument object contains an array of the arguments used when the function was called (invoked).

// This way you can simply use a function to find (for instance) the highest value in a list of numbers:

// when use length for function it returns the number of arugment not parameter.you can use more arguments less then parameter

function findMaxValue(x) {
    console.log(x);
    console.log(arguments.length);
    console.log(arguments);
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i]>max) {
        max = arguments[i];
    
    }

}

    return max;

}


let x = findMaxValue(1,10,50,18,90,-1,100,-100,30,56,);

console.log(x);



function minNumber(x,y,z,a,b,c,d) {

    // it show undefined values for c and d 
    console.log(x,y,z,a,b,c,d)

    let min = Infinity;
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i]<min){
            min = arguments[i];
        }
    }

    return min;

}


let y = minNumber(10,-1,-100,9,90)
console.log(y)




// argument are passed only values not referenced of arguments

function myarguments(x,y){
    x = x+5 // here is changed x value which is argument a but do not effect argument outside of function
    
    console.log( x+y )
}

let a = 5;
let b = 10;

myarguments(a,b)

console.log(a,b)


// but an object keeps reference its own properties


function myarguments1(x) {

    x.value = x.value + 5;
    x.add = x.add +10;
    console.log(x.value,x.add);

}

let m = {
    value:20,
    add:30
}

myarguments1(m)

console.log(m) // but here the object value is changed

