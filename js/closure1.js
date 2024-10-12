//closures

// JavaScript variables can belong to the local or global scope.

// Global variables can be made local (private) with closures.



console.log('==================clousers =================');


// so clouse can put only variables value it can put references and value along with clousers


(
  function(){

    var num1 = 3;
    var num2 = 5;

    let add = function(){
      return num1 + num2;
    }

    console.log(add()); // Output: 8
    console.dir(add); // Output:

    var num1 = 10;
    var num2 = 11;

    console.log(add()); // Output: 21
    console.dir(add); // Output:

  }
)()


// let and const both are block scope : script will be
// var functional scope



let n1 =10;
let n2 = 20;
let sum = function(){
  return n1 + n2;
}

console.dir(sum); // Output: 30






for(let i=0;i<5;i++){

let func = function(){
  console.log(i);
}

setTimeout(func,3000)

}


for(var x1 = 0; x1<5; x1++){
  let func = function(){
    console.log(x1); // it print 5 times because it is global scope and before checking conditions for increase it value and assign value to the variable and after that checking condition  will be executed
  }
  setTimeout(func,3000)
}



// Variable Lifetime
// Global variables live until the page is discarded, like when you navigate to another page or close the window.

// Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.




// Target: we want increase counter value by calling the add function from the ouside of the function

// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

console.log(counter);


counter = 4;

console.log(counter);

// but i can change the counter value without calling add( ) function so why to need to the add() function
// this is the problem this function

// The counter should now be 3






// Initiate counter
let counter1 = 0;

// here we add the counter1 inside the add function
function add() {
  let counter1 = 0;
  counter1 += 1;
}

// Call add() 3 times
add();
add();
add();


console.log(counter1);

//The counter should now be 3. But it is 0






// It did not work because we display the global counter1 instead of the local counter.

// We can remove the global counter1 and access the local counter1 by letting the function return it:


// Function to increment counter
function add() {
  let counter = 0;
  counter += 1;
  return counter;
}

// Call add() 3 times
let v1 = add();
let v2  = add();
add();

console.log(v1,v2)

// when calling add() function,the counter value reset to 0 and increase the counter from 0 to 1 but when it calling same is happened. can not increase counter


//The counter should now be 3. But it is 1.









// JavaScript Nested Functions
// All functions have access to the global scope.  

// In fact, in JavaScript, all functions have access to the scope "above" them.

// JavaScript supports nested functions. Nested functions have access to the scope "above" them.

// In this example, the inner function plus() has access to the counter variable in the parent function:



function add() {
  let counter = 0;

  function plus() {
    counter += 1;
  }

  plus();   
  return counter;
}


// here is problem we can not call the plus function outside of the the add function





// JavaScript Closures
// Remember self-invoking functions? What does this function do?


function add3(){
  
  let counter3 = 0;

  return function() {

    return counter3 += 1
  

  }




}

let a1 = add3();
console.dir(a1)
// already closed parrent function but having access to the parrent function after parrent is closed
a1()
let a2 = add3();
let a3 = add3();
let a4 = add3();



// function temporary(){
//   let counter = 0;
//   return function(){
//     counter +=1
//   }
// }

// const add1 = temporary();
// console.dir(add1)
// add1()
// add1()
// add1()

