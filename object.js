
// Methods for Defining JavaScript Objects
// Using an Object Literal
// Using the new Keyword
// Using an Object Constructor
// Using Object.assign()
// Using Object.create()
// Using Object.fromEntries()

// JavaScript Object Literal
// // An object literal is a list of property names:values inside curly braces {}

// {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};




// Note:
// An object literal is also called an object initializer.



// creating js object and this formate is know as object literals formate

const person6 = {}

// add properties to the object
person6.firstName = "John";
person6.loastName = "Doe";
person6.age=24;
person6.age=27 // duplicated key do not add but key value can be overite
person6.firstName = "ahmed"; // duplicated key do not add but key value can be overite

console.log(person6);

// using the new object  and this formate is not object literal formate and it should not be used,use object literal formate which is giving up;


const person7 ={}
person7.firstName = "John";
person7.lastName = "ahmed";
person7.age=27;

console.log(person7);


// can not compare two objects becauser they have diiferent location in memory and
console.log(person7 == person6)
console.log(person7 === person6)



// Object Constructor Functions
// Sometimes we need to create many objects of the same type.

// To create an object type we use an object constructor function.

// It is considered good practice to name constructor functions with an upper-case first letter.


// the his keyword inside the object it point to the it's object not global object

// it is posible to create same type object many times using new Person object

function Person(first,last,location){

    this.firstName = first;
    this.lastName = last;
    this.location = location;

    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
}

let person_about3 = new Person('ahmed','masum','Gazipur')
let person_about4 = new Person('ahmed','masum','Gazipur')
console.log(person_about3)
console.log(person_about3.fullName())

// it retun always false even === checking
console.log(person_about3 == person_about4)

// when compare you and yourself is true
console.log(person_about3 === person_about3)


// JavaScript Object Methods
// JavaScript Object Methods can be grouped into:

// General Methods
// Property Management Methods
// Object Protection Methods
// 

// in primitive data types has not any properties and methods
// premitive data types ar immutable

// there are 5 premitive data types
// 1.string 2.number 3.boolean 4.undefined 5.null


// mutable means that change particulary part or some part in anything that is mutable
// immutable means that you can not change evrything in anything that is immutable ,which means do mean you change particalar part in this this exampla is giving below


// imutable

let desh1 = "Banlagesh"

// when assing it new way like this
desh1 = "mydesh"
// above this means that you can change enverything not change some part of everthing .example is following down

let student_details = {
    name: 'John', // this is call propety and in this propety name is key and john is it's value that means key:value pair
    age: 20,
    grade: 'A',
    myfunction: function(){ //ojbect menthod which is function
        return this.name
    }
}


// when change this object value

student_details.name = "Hasan mahmood"; // this means that you can change some part of object
// this means that you can change some part of object and it's means mututable and enverything is change into this object. but when we assaing desh = "mydesh" then evething is changed

// so in a words mutable and imutable

// mutable: change some part of something in this object
// imutable: change evrything from any thing 



// object reference value

let person_about5 = {
    name: 'John',
    age: 20,
    grade: 'A'
}


let john =  person_about5;

john.name = "hasan mahmood";

console.log(person_about5);

// here john is object and person_about5 is object , reference value and when we change john then person_about5 is also change because they are same object reference value and just thin as person_about5 pont a particaular memory location but when we assain person_about5 into john ,this time this john object point same memory loction.that is why when change the john object then person_about5 object is also change. that is means objet reference value

// in a word john is not a copy of person_about5 but it is person_about5.both joh and person_about5 are same object so any change to john is also change to person_about5


// let check

console.log(person_about5 == john)
console.log(person_about5 === john)

// so it is true that when check the simliar object using " == " and also " ===" both the simliar object show false beause both object memory was not same.but in here the simliar object show true because both object point same memory location.that is means object reference value



// object generat method


const oldObject = {
    name: 'John',
    age: 20,
    grade: 'A'
}

const newObj ={
    'location':"usa",
    
}

Object.assign(newObj, oldObject)
console.log(newObj)

// object.create new object using old object

const newObj2 = Object.create(oldObject)

newObj2.name = 'masum'

console.log(newObj2)