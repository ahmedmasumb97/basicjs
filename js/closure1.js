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