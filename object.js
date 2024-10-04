
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


// the this keyword inside the object it point to the it's object not global object

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

const newestObj = Object.create(newObj); //here create an empty object but in prototype it is assign the old object
newestObj.name = "hasan mahmood"; // here add new property to newestObj but donot change the property which is inside the prototype

// newestObj.prototype.name = "hasan"

console.log("newest obj",  newestObj)

// old object

console.log('old obj', newObj)
// questions:how to add old object to prototype
// use of this type of object is that we can add new property to old object without changing the old object

// answers:
// This approach is useful when you need to extend or modify objects dynamically without modifying the original object, especially in cases like adding features to an existing class or object structure.


// Object.defineProperty(Object,property name, descriptor)

// The Object.defineProperty() method allows you to define or modify a property directly on an object with more control over its behavior (like making it non-enumerable, non-writable, etc.).


let myObj = {
    age: 20,
    grade: 'A'
}

Object.defineProperty(myObj, 'name',{
    value: "ahmed masum",
    writable: false, //the value can not be null
    enumerable: true, //can be used loop
    configurable: false   // Whether the property can be deleted or its attributes can be modified (true by default).
})

console.log(myObj)

myObj.name = "hasan mahmood" //can not change property name
myObj.grade = "A+" // can change it
console.log(myObj)

// delete myObj.name
delete myObj.name;//can not delete for object defineproperty access
console.log(myObj)


// Object.defineProperties()


// The Object.defineProperties() method allows you to define or modify multiple properties on an object simultaneously. It takes an object and a set of property descriptors, making it more convenient when you want to define multiple properties at once with specific behaviors (like read-only, getter/setter, non-enumerable, etc.).

let myObj1 = {}

Object.defineProperties(myObj1, {
    firstName: {
        value: "ahmed",
        writable: false, //protety attribute
        enumerable: true,
        configurable: false
    },

    lastName: {
        value: "masum",
        writable: false,
        enumerable: true,
        configurable: false
    },

    fullName: {

        get(){return `${this.firstName} ${this.lastName}`},
        set(value){return[`${this.firstName} ${this.lastName}`].split(" ")},
        enumerable: true,
        configurable: false
    }

   
    



})

console.log(myObj1.fullName)





// prototype
























// object properties

let objPro = {
    age: 20,
    name: "ahmed",
    gender: "male",
    address: "dhaka",
    phone: "0178456789",
}

objPro.age =27
// use this for dynamic
let contact = 'phone'
objPro[contact] = "01776050586"
console.log(objPro)


// nasted object

let nestedObj ={
    name: "ahmed",
    age: 20,

    address: {
        street: "mirpur",
        city: "dhaka",
        country: "Bangladesh"
    },

    hobbies: ["reading", "painting", "cooking"],


    friends: [
        {
            name: "hasan",
            age: 21
        },
        {
            name: "mahesh",
            age: 22
        },
        {
            name: "shamim",
            age: 23
        }
    ]
}

let namebox =''

// for(let x in nestedObj){
//     console.log(nestedObj[x])

//     let y = nestedObj['friends']
//     for (let x in y){
//         let z =y[x]
        
//         for(let a in z){

//             if(z['name']){
//                 namebox += z['name'] + ", "
//                 break;
//             }

//         }
//     }
// }

console.log(typeof nestedObj.friends)

let friends = nestedObj.friends;
for(let friend in friends){
    
    console.log(friends[friend])

    if(friends[friend].name){
        namebox += friends[friend].name + ", "
        
    }


}

console.log(namebox)







let ndesh = new String('Bangladesh')
console.dir(ndesh)





const Person8 = {
    firstName:'ahmed',
    lastName: "masum",
    age:27,
    date : new Date()
}


Person8.fullName = function(){
    return `${this.firstName} ${this.lastName}`
}


console.log(Person8.fullName())


// display the object into html

// you can show you js in html by js dom
// about all elements in js can Json.stringify() even datae object but you can 
// stringify the funcion example is shown

let string = JSON.stringify(Person8)
document.getElementById('demo8').innerHTML = string
console.log(string)
// but here it don not convert the function to string but it is possible to convert the string using stringify

Person8.fullName = Person8.fullName.toString()
let mystriong = JSON.stringify(Person8)
console.log(mystriong)
document.getElementById('demo10').innerHTML = mystriong




// object getter and setter

// using getter

const person9 = {
    firstName: 'ahmed',
    lastName: "masum",
    age: 27,
    value : '',
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName1(value){
        this.value = value
    }
}


// normal method function
const person10 ={
    
    firstName: 'ahmed',
    lastName: "masum",
    age: 27,
  
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person9)
console.log(person10)

console.log(person9.fullName)


// setter

person9.fullName1 = 'John';
console.log(person9)

// access getter and setter


// both are the same to see but difference in backend whereas normal method function hold the method inside the function until the function is called or not but the getter, it provide computed value and it is called automatically when the property is accessed unless it is not called.if you can not call the getter directly it will be hide and i mean in the console log this is remain hide . as a result it take small memory then normal method function and it is simple than normal method function and it's data quality is good and security is good compare to the normal method function

// the setter  do not contain inside the function it is called automatically when the property is set or not
// it can access like as property beacuse it is computed autmatically in console.log
// when nedd it then it is active automatically when not,it aways hide

















// object constructior functions

// object constructor function is the blue of object ,using this blue print you can create many objects.for almost of we need same type of object is needed but we can create many objects using same blue print so we can use object constructor function

// after creating blue print of object you can not change.if  it change the blue print, main purpose for creating blue print of objcet will be down .

// but using object constructor function you can create many objects using same blue print

// in constructor object has no this keywrod  value but this keyword value will be when it is created by using new keywrod

// it is reuseable ,can use angin and again using blue print function


// here do not create original object 

function Persona(firstName, lastName,age){
    this.firstName = 'ahmed'
    this.lastName = "masum"
    this.age = 27

    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

// create here original object
const masum = new Persona('Mohmmada', 'masum',27)
// can change this value and add value and delete value but can not change the blue print of object
// suppose that

masum.location = 'Gazipur'
masum.mydetails = function(){
    return `my name is ${this.firstName} ${this.lastName} and i am ${this.age} years old and i live in ${this.location}`
}
// can not add setter or getter


console.log(masum)

const hasan = new Persona('Mohmmada', 'hasan',27)

// here hasan object do change after changing masum object

console.log(hasan)

const jamir = new Persona('Mohmmada', 'jamir',27)

const anik = new Persona('Mohmmada', 'anik',27)


// but when you try to change blut print of objects it do not error but it does not change

Persona.about = 'this is my object'

console.log(Persona)





// object methods

let objectMthods = {
    firstName: 'John',
    lastName: "Doe",
    age: 30,
    greet: function(){
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`)
    }
}


const newObj1 = {
    firstName: 'Jane',
    lastName: "Doe",
    
}


Object.assign(objectMthods,newObj1)

console.log(newObj1)
console.log(objectMthods)

console.log(new Map(Object.entries(objectMthods)))

// JavaScript Object.fromEntries()
// The fromEntries() method creates an object from a list of key/value pairs.

console.log(Object.fromEntries(newObj1))