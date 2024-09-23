
//  js this keyword always indicates the current object which object belongs to it


const person13 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

//   here this means it current object which is Perons


// to know more information about this keyword please following go through those text



// What is this?
// In JavaScript, the this keyword refers to an object.

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.



// In an object method, this refers to the object.

const person4 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };


// Alone, this refers to the global object.
let x = this;


// In strict mode, when used alone, this also refers to the global object:
"use strict";
let x4 = this;   //this define goblal object or window object



// this in a Function (Default)
// In a function, the global object is the default binding for this.

// In a browser window the global object is [object Window]:



function myFunction() {
    return this;  // this define global object or window object
  }

//   this in a Function (Strict)
//   JavaScript strict mode does not allow default binding.
  
//   So, when used in a function, in strict mode, this is undefined.

"use strict";
function myStrictFunction() {
    return this;  // this is undefined in strict mode
  }



//   this in Event Handlers
//   In HTML event handlers, this refers to the HTML element that received the event:

{/* <button onclick="this.style.display='none'">  //this define the button element
  Click to Remove Me!
</button> */}

// above all example is object method binding

// if i want who will be object for this that is call explicit function binding. we can set a definite object for this key by usng call and apply the binding



const person5 = {
    fullName: function() { 

        return this.firstName + ' ' +this.lastName;}

}

definite_object = {
    firstName: "John",
    lastName: "Doe",
    location: "USA"
}

person5.fullName.call(definite_object);