

// invocations
// all the normal function calling are called invocatins

// in js have built in call methods that is accually call



// All functions in js are methods because all functions is written in js objdects example is givng below


function boxFunction(title){
    console.log('Box Function Called:', title);
}

window.boxFunction('red box')

// so we can say who is before  (.) thai is this this keyboard. here winddow is global object and this boxfunction is the method of the global object all the functions is method because every function is belog in object that may be golbal object or other object


// All Functions are Methods
// In JavaScript all functions are object methods.

// If a function is not a method of a JavaScript object, it is a function of the global object (see previous chapter).

// The example below creates an object with 3 properties, firstName, lastName, fullName.


const box1 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  // This will return "John Doe":
  box1.fullName();  


//   What is this?
// In JavaScript, the this keyword refers to an object.

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.



// this is not a variable. It is a keyword. You cannot change the value of this.




// The JavaScript call() Method
// The call() method is a predefined JavaScript method.

// It can be used to invoke (call) a method with an owner object as an argument (parameter).



const box  = {
    fullName: function(location,language){

        return ` ${this.firstName} ${this.lastName},he live in ${location} and his language is ${language}`;
    }
}


const child1 = {
    firstName: 'John',
    lastName: 'Doe'
}

const child2 = {
    firstName: 'Jane',
    lastName: 'Smith'
}



console.log(box.fullName.call(child1))  // John Doe
// we can pass parameter in function calling like as
console.log(box.fullName.call(child2,"NewYork","English"))  // Jane Smith




// apply



// Method Reuse
// With the apply() method, you can write a method that can be used on different objects.


const boxapply = {

    fullName: function(location,language){

        return ` ${this.firstName} ${this.lastName},he live in ${location} and his language is ${language}`;
    }
}


const child1apply = {
    firstName: 'John',
    lastName: 'Doe'
}


const child2apply = {
    firstName: 'Jane',
    lastName: 'Smith'
}


console.log(boxapply.fullName.apply(child1apply,["NewYork","English"]))  // John Doe
console.log(boxapply.fullName.apply(child2apply,["Tokyo","Japanese"]))  // Jane Smith





// The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.



// apply uses: find a array max number without using loop 

// bject_name.method.apply(retutn a object,array of agruments in array)
// null is a object and it place you can use anything like empty string,Math object or anything.but should be giving an object
Math.max.apply(null,[1,100,-10,23,])

console.log(Math.max(1,10,100,-10,-90))




// JavaScript Strict Mode
// In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.


let box2 = {

    fullName: function(location,language){

        return ` ${this.firstName} ${this.lastName},he live in ${location} and his language is ${language}`;
    }
}


const child1strict = {
    firstName: 'John',
    lastName: 'Doe'
};


const child2strict = {
    firstName: 'Jane',
    lastName: 'Smith'
};

firstName = "i am global1"
lastName = "i am global2"

console.log(box2.fullName.apply('',["NewYork","English"]))  // John Doe
// when do not use strict mood then this place("") will be global window
// when use strict mood this('') will be strict  