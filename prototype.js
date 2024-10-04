function Person_about_one(first,last,age,location){

    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.location = location;

    this.fullname = function(){
        return this.firstname + " " + this.lastname;
    }

}


let nabi = new Person_about_one('Nabi','Ahmed',27,'Gazipur')

// do not add beacasue it template of object
Person_about_one.title = 'Job title';
// but can do this using prototype

Person_about_one.prototype.title = 'Job title';

console.log(nabi)
console.log(nabi.title)



function Person_about_two(){
    this.firstname = 'John';
    this.lastname = 'Doe';
    this.age = 20;
    this.location = 'New York';
}

// can found title in this object constructor because the title varibel is in only the Person_about_one not person_about_two.it has only person_about_one's properties
console.log(Person_about_two.title)


// can change core prototype in js

// you should avoid those but only try to change own object properties like object constructor function

// String.prototype.myfunction = function(){
//     return 'This is my custom string method';
// }

// Object.prototype.myfunction = function(){
//     return 'This is my custom object method';
// }

// let mycountry = 'Banagladesh';
// let newobj = {
//     name: 'John',
//     age: 20
// }

// console.log(mycountry.myfunction())
// console.log(newobj.myfunction())












// Prototype Inheritance
// All JavaScript objects inherit properties and methods from a prototype:

// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype
// The Object.prototype is on the top of the prototype inheritance chain:

// Date objects, Array objects, and Person objects inherit from Object.prototype.



// Adding Properties and Methods to Objects
// Sometimes you want to add new properties (or methods) to all existing objects of a given type.

// Sometimes you want to add new properties (or methods) to an object constructor.


// Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.

