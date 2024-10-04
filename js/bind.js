console.log("=========bind.js================================")




// Function Borrowing
// With the bind() method, an object can borrow a method from another object.

// The example below creates 2 objects (person and member).

// The member object borrows the fullname method from the person object:


const bperson = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };


const member = {
    firstName: "John",
    lastName: "Smith"
}

const member1 = {
    firstName: "Jane",
    lastName: "Doe"
}

// bind can borrow a method from another object

const berrowMethod = bperson.fullName.bind(member)
console.log(berrowMethod())  // John Smith
console.log(bperson)




// Preserving this
// Sometimes the bind() method has to be used to prevent losing this.

// In the following example, the person object has a display method. In the display method, this refers to the person object:

// const pberson1 = {
//     firstName:"John",
//     lastName: "Doe",
//     display: function () {
//       let x = document.getElementById("demo");
//       x.innerHTML = this.firstName + " " + this.lastName;
//     }
//   }
  
//   pberson1.display();



//   When a function is used as a callback, this is lost.

// This example will try to display the person name after 3 seconds, but it will display undefined instead:


const pperson2 = {
    firstName:"John",
    lastName: "Doe",
    display: function() {
      let x = document.getElementById("dent1");
      x.innerHTML = this.firstName + " " + this.lastName;
    }
};

setTimeout(pperson2.display, 3000);



// The bind() method solves this problem.

// In the following example, the bind() method is used to bind person.display to person.

// This example will display the person name after 3 seconds:



const bperson2 = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      console.log(this.firstName + " " + this.lastName)
      let x = document.getElementById("dent2");
      x.innerHTML = this.firstName + " " + this.lastName;
      return this.firstName + " " + this.lastName;
    }
  
}

console.log(bperson2.display())

// prevent losing this keyword using bind method
let display = bperson2.display.bind(bperson2)
setTimeout(display, 3000);





// What is this?
// In JavaScript, the this keyword refers to an object.

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.


