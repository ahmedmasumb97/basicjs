// Object Protection Methods
// Prevents re-assignment
// const car = {type:"Fiat", model:"500", color:"white"};

// // Prevents adding object properties
// Object.preventExtensions(object)

// // Returns true if properties can be added to an object
// Object.isExtensible(object)

// // Prevents adding and deleting object properties
// Object.seal(object)

// // Returns true if object is sealed
// Object.isSealed(object)

// // Prevents any changes to an object
// Object.freeze(object)

// // Returns true if object is frozen
// Object.isFrozen(object)


// Using const
// The most common way to protect an object from being changed is by using the const keyword.

// With const you can not re-assign the object, but you can still change the value of a property, delete a property or create a new property.





// JavaScript Object.preventExtensions()
// The Object.preventExtensions() method prevents adding properties to an object.



const person = {
    name: "John",
    age: 30,
    city: "New York",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

Object.preventExtensions(person)

// you can not add any properties this object because it is used preventExtensions

// can not add any properties
person.job = "developer"

console.log(person)



// JavaScript Object.isExtensible()
// You can use Object.isExtensible() to check if an object is extensible.

// The Object.isExtensible() returns true if an object is extensible.



console.log(Object.isExtensible(person));




// JavaScript Object.seal()
// The Object.seal() method prevents additions or deletions of new properties.

// The Object.seal() method makes existing properties non-configurable.

// The Object.isSealed() method can be used to check if an object is sealed.




const person1 = {
    name: "John",
    age: 30,
    city: "New York",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}


Object.seal(person1)



// you can not delete this object properties and can used for array other objects

delete person1.age
person1.real = true
console.log(person1)




// JavaScript Object.freeze()
// The Object.freeze() method prevents any changes to an object.

// Frozen objects are read-only.

// No modification, addition or deletion of properties are allowed.
let person2 = {
    name: "John",
    age: 30,
    city: "New York",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
Object.freeze(person2)
person2.name = 'new person';
console.log(person2)

// Note
// The Object.freeze() method will fail silently in non-strict mode and throw a TypeError in strict mode.




// JavaScript Object.isFrozen()
// The Object.isFrozen() method can be used to check if an object is frozen.

// The Object.isFrozen() returns true if an object is frozen.

