// JavaScript Hoisting
// in js both let and var hoisted but when var hoisted it is initialized with undefined value but let is not initialized with undefined value as reseult  not created any memory location for let when is hoisted  but crated memory reference for var when hoisted and initialized with undefined value

// what is hoisteding?
// hoisting means js hoisted the declaration of the variable and function to the top of the scope before the execution of the code.

// for const donot hoisted because const should be write in line i means for const write declaration first after that  wright the assainment of the declaration that is possible and it show syntex errors when we write const after the assainment of the declaration.


// The let and const Keywords
// Variables defined with let and const are hoisted to the top of the block, but not initialized.

// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

// Using a let variable before it is declared will result in a ReferenceError.

// The variable is in a "temporal dead zone" from the start of the block until it is declared: