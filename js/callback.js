// 



// fucntion sewuence you can write functions more and more but it can exicute until you do not call functions and it can  not show thouse functions serially according to the function definition and it can show accordingly with functions callings

function first(){
    console.log('first function')

}

function second(){
    console.log('second function')

}

function third(){
    console.log('third function')

}

// show those according to the function callings and this is sequence of functions

third()
first()
second()



// Sequence Control

// Sometimes you would like to have better control over when to execute a function.

// Suppose you want to do a calculation, and then display the result.

// You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:


// display function into console log
function display(some){
    console.log('Result: ',some)
}

//calculate function
function myCalculator(a, b){
    let sum = a + b;
    return sum;
}

//function calling
let result = myCalculator(10,30)

display(result)







