let a = 10;
let b = 20;
function sum(a,b){
    return a + b;
}

sum = sum(a,b)
console.log(sum);


const person  = {
    first_name: 'John',
    last_name: 'Doe',
    age: 30,
    full_name: function(){
        return this.first_name +'' + this.last_name;
    }
}


console.log(person.full_name())


const car = {}
car.model = 'BMW'
car.model = "toyota"
car.year = 2000
console.log(car);
console.log(car.model);
console.log(car['year']);




const person1 = {
    // Properties
    firstName: "John",
    lastName: "Doe",
    age: 30,
  
    // Method
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    },
  
    // Nested object
    address: {
      street: "123 Main St",
      city: "Anytown",
      zipCode: "12345"
    },
  
    // Method using the nested object
    getAddress: function() {
      return `${this.address.street}, ${this.address.city}, ${this.address.zipCode}`;
    }
  };
  
  // Accessing properties
  console.log(person1.firstName); // Output: John
  console.log(person1.address.city); // Output: Anytown
  
  // Calling methods
  console.log(person1.fullName()); // Output: John Doe
  console.log(person1.getAddress()); // Output: 123 Main St, Anytown, 12345
  
  document.getElementById('demo1').innerHTML= person1.getAddress()


  let person2 = {
    // Properties
    firstName: "Jane",
    lastName: "Doe",
    age: 25,    
  }

  let text = ''
  for (let x in person2) {
 

    text += person2[x]+ " "

  }

  console.log(text) //


  const myobj = Object.values(person2)
  const myobj2 = Object.entries(person2)
  const myobj3 = Object.values(person2)
  document.getElementById('demo3').innerHTML= myobj3+""
  console.log(myobj)
  console.log(myobj2)


  const fruits = {Bananas:300, Oranges:200, Apples:500}

  text1 = ''
  for (let [fruit,value] of Object.entries(fruits)){

    text1 += fruit + " " + value 

  }

  console.log(text1)


//   object construction function

function Person(firstName, lastName, age,location) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
}


let player1 =  new Person("hasan",'ahmed',27,"Dhaka")
let player2 =  new Person("rubel",'ahmed',27,"Khulna")
let player3 =  new Person("jakir",'ahmed',27,"Barishal")
console.log(player1.fullName)

console.log(player1)



const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let len = fruits1.length

let txt = "<ul>"
for(let i =0;i <len;i++){
  txt += "<li>"+fruits1[i]+"</li>"

}

txt += "</ul>"
console.log(txt)

document.getElementById('demo4').innerHTML=txt

const person_name = ['hasan', 'ahmed', 'jakir', 'rubel', 'moinul']
let txt1='<ul>'
person_name.forEach(myfunction)
function myfunction(value) {
  txt1 += "<li>" + value + "</li>"
}


txt1 += "</ul>"
document.getElementById('demo5').innerHTML = txt1


let myobj1 = {
  name: "John Doe",
  age: 30,
  city: "New York",
  cars:[
    {name:'ford',model:['Fiesta','former','focussed','Ka']},
    {name:'BMW',model:['Fiesta','former','focussed','Ka']},
    {name:'Toyota',model:['Corolla','Camry','RAV4','Camry']},
    {name:'Honda',model:['Accord','Fit','Odyssey','Fit']},
    {name:'Mercedes',model:['E-Class','A-Class','GLA','E-Class']},
    {name:'Audi',model:['A3','A4','A5','A6']},
    {name:'Ford',model:['Mustang','F-150','Explorer','F-150']},
    {name:'Tesla',model:['Model S','Model X','Model Y','Model 3']},
    
  ]
}

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let odd = numbers.findIndex(myfunction1)
function myfunction1(value,index,array){
  return value >18;
}

console.log(odd)



const points = [40, 100, 1, 5, 25, 10];
points.sort(myfunction2)
function myfunction2(a, b) {
  return b - a;
}

console.log(points)

points.map(function(value,index,array){
  console.log(value*2)
})


let numbers1 = [45, 4, 9, 16, 25];
let newNumber = numbers1.reduce(myfunction3);
function myfunction3(total,value,index,arr){
  return total+value
}
console.log(newNumber);


let numbers2 = [45, 4, 9, 16, 25];
let is_odd = numbers2.some(function(value,index,arr){
  return value%2 != 0
})

console.log(is_odd);



let numbers3 = [45, 4, 9, 16, 25];
let big =''
let small = ''

let n1 = numbers3.forEach(function(value,index,arr){ 

  if(value >18){
    big += `${ index } || ${value} || `
  }
  else{

    small += value +' '
  }

  // forEach method do not return anything

  return value

})
console.log(big);
console.log(small)
console.log(n1)

// can not empply contion in map method 

let numbers4 = [45, 4, 9, 16, 25,100];
let n2 = numbers4.map(function(value,index,arr){
  // return (value % 2 == 0) && (value % 5 != 0) 
  // return value>18
  return value*2
})

console.log(n2)



// filter can not add ,multiple array element and it ony cheack  custom condition and when the custom codtion is then it give this element in array and if the condition is not true then it will not give this element in array
let numbers5 = [45, 4, 9, 16, 25,100];
let n3 = numbers4.filter(function(value,index,arr){
  return (value % 2 == 0) && (value % 5 != 0) 
  // return value>18
  // return (value*value)
})

console.log(n3)


// it is similar to filter but defferrent is it retun only the first match which contion is true 
let numbers6 = [45, 4, 9, 16, 25,100];
let n4 = numbers4.find(function(value,index,arr){
  return (value % 2 == 0) && (value % 5 != 0) 
  // return value>18
  return (value*value)
})

console.log(n4)



// The Array.from() method returns an Array object from any object with a length property or any iterable object.
// convert a string to an array

let desh = "Bangladesh";
let n5 = Array.from(desh)
console.log(n5)

const fruits11 = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits11.keys()
console.log(typeof keys)
for(let x of keys){

  console.log(x)
}

let input = document.getElementById("value")
let button = document.getElementById("demo6")

button.addEventListener("click", function() {
  let value = Number(input.value)
  let varible;

  if(isNaN(value)){
    varible = "please enter a number"
  }
  else{
  varible = (value >= 18)? "Your are able to vote":" you are not allowed to vote"
  }
  
  document.querySelector('.demo1').innerHTML= varible
})



// switch loping

// switch(expression){
//   case 'case1':
//     // code block
//     break;
//   case 'case2':
//     // code block
//     break;
//   default:
//     // code block
// }

// 


let day = new Date().getDay();
console.log(day)
switch(day){
  case 0:
    day = 'sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
  
  default:
    day = 'error'
}

console.log(day)


switch(new Date().getDay()) {
  case 4:
  case 5:
    text = 'soon it is weekend'
  case 0:
  case 6:
    text = 'it is weekend'
  default:
    text = 'it is weekday'
}

console.log(text)

let myob = {
  "name": "John",
  "age": 34,
  "length":'6feet 3 inches',
  "city": "New York",
  "country": "USA",

}
let val = ''
for(let value in  myob) {
   val += ` ${value}`
}

console.log(val)

// for(let i =0;i<10;){

// }



// for loop

let fruit_box = ['apple', 'orange', 'banana', 'orange']
text_box = ''
// for(let i =0,len1 = fruit_box.length;len;i++){

//   text_box += fruit_box[i]

// }
// console.log(text_box)


// in for loop first expression is independent example that 

let i = 0;
let len1 = fruit_box.length

console.log(len1)

for( ; i < len; i++){

  console.log(fruit_box[i])
}


// even 3rd express which is increment or decrement is optional and then this time we need to right increment or decrement part inside the  block
// even for loop first expression is optional it can write out the for loop block

console.log('--------------------------------')
let j = 0;
let len2 = fruit_box.length
let text2 = ''
console.log(text2)
for( ; j<len2;){

  text2 += fruit_box[j]+'  '
  j++
  console.log(text2)

}

console.log(text2)




// even for loop 2n expression is optional when this will be optional you can write break statements inside the for loop block and it will break the loop

let fruit_box1 = ['apple', 'orange', 'banana', 'orange','strawberry', 'orange','apple']

let k = 0;
let len3 = fruit_box1.length
let text3 = ''
for( ; ;k++){

  if(k == len3){
    break
  }

  else{
    text3 += fruit_box1[k]+'  '
  }

}

console.log(text3)

// in for loop first time js excute lent n = 0 and after that excute consol log and show 0 and after that the loop will be executed when see js n= 1 and it chec

let n = 0;
// console.log(n)
// for(const n=1;n<10;n++){
//   console.log(n)
// }
// console.log(n)

// let n= 1
// let n =2

// let n = 0;
// first time in loop  when n=1 and then condition check it is true then insise of loop is exuited but this icrement is excuted and after that when lop will be started then this loop is executed and icrement (n++) increase the value of n and value is n = 2 this time  the condition is true inside the block code is excuted and this proecss is continue when the contiditon is false it the for loop is stopped and go to the next line and print it n =1o and when loof is countine the loop is running in one place it does not go up and down without block 

console.log(n)
for(let n=1;n<10;n++){
  console.log(n)
}
console.log(n)


// 3rd is optional 
console.log('========================================')

let fruit_box2 = ['apple', 'orange', 'banana', 'orange','strawberry', 'orange','apple']

let len4 = fruit_box2.length

for( ; ; len4--){
  if(len4 == -1){
    break
  }

  else{
    console.log(len4)
  }
}



// for loop a object js give special loop which is for in loop ,it is only for object not iterabele object like array ,streing and etc

const person_about = {
  name: 'sabbir',
  age: 22,
  job: 'student',
  salary: 100000
}


let text4 = '';
for (let x in person_about) {
  console.log(x)
  console.log(person_about[x])
}


// for forEach() use for a object




// Objects in JavaScript are not inherently iterable in the same way that arrays are. The forEach method depends on the array's ability to iterate over its elements using indices. Objects, however, don't have a numeric index system, as their properties are key-value pairs.

// person_about.forEach(mytest)
// function mytest(value,index,array){



//   console.log(value)

// }



// Example Explained
// The for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person[x]



// For In Over Arrays
// The JavaScript for in statement can also loop over the properties of an Array:


const number1 = [45, 4,300, 9, 16, 25,100];
for(let x in number1){
  console.log(number1[x])
}


// Do not use for in over an Array if the index order is important.

// The index order is implementation-dependent, and array values may not be accessed in the order you expect.

// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.







// foor of .it is used or itterabel objects like arrays and strings


const number2 = [45, 4,300, 9, 16, 25,100];

for( let x of number2 ){
  console.log(x)
}


console.log('------------------------')
number2.forEach(function(value,index){
  console.log(value , index)
})

let language = 'English';
for(let x of language){
  console.log(x)
}


let person_details = {
  name: 'John',
  age: 34,
  job: 'developer',
  cars:['car1','car2','car3','car4','car5'],
  salary: 100000,
}

console.log(person_details.cars)

let data;
for(let x in person_details){

  if(x == 'cars'){
    console.log(person_details[x])
    break;
  }};


  let y = 0;
  while(y < 10){

    console.log(y);
    y++;

  };

// infinite loop
  // while(ture){
  //   console.log('I will never stop')
  // }

  let z = 20;

  do {
    console.log('this is ' + z)
    z--
  }

  while(z > 10)


  let z1 = 0;
  do{
    console.log('this is ' + z1)
    z1++
  }
  while(z1 < 10)


    // break and continue

    let list = ['apple','manago','pipeapple','orange','lemon','kiwi']

    for(let i =0;i <list.length;i++) {
    
      if(i == 5){
        console.log('this is five times print')
        break
      }
    }


let list1 = ['apple','manago','pipeapple','orange','lemon','kiwi']

for (let i = 0; i <list1.length;i++){
  if(i === 2){
    continue
  }
  console.log('this is print  ' + i)

}


// set

let letter = new Set(['a','b','c','d','e','f','g','h'])
console.log(letter)
const letter1 = new Set();
let t1 = 'a';
let t2 = 'b';
let t3 = 'c';
letter1.add(t1);
letter1.add(t2);  
letter1.add(t3);

console.log(letter1)

// sett itterable object so we can user for 

for(let i of letter1){
  console.log(i)
}


let mark_set = new Set([49,50,90,60,70]);
let keys1 = mark_set.keys();

for(let key of  keys1){
  console.log(key)
}
for(let key of mark_set){
  console.log(key)
}

for(let value of mark_set.values()){
  console.log(value)
}



// The entries() method is supposed to return a [key,value] pair from an object.

// A Set has no keys, so the entries() method returns [value,value].

// This makes Sets compatible with Maps.


for (let [value,index] of mark_set.entries()){
  console.log(index,value)
}


// map 


// You can create a JavaScript Map by:

// Passing an Array to new Map()
// Create a Map and use Map.set()


let mark_set1 = new Set([49,50,90,60,70]);
const fruit2 = new Map([
  ['apple',500],
  ['banana',100],
  ['orange',200],
  ['mango',300]
])

console.log(fruit2);


// way 2

const fruit3 = new Map();
fruit3.set('apple',500);
fruit3.set('orange',600)
fruit3.set('banana',100)
fruit3.set('mango',300)

console.log(fruit3);

console.log(fruit3.get('apple'));

for(let [key, value] of fruit3){
  console.log(key, value)


}


let delet = fruit3.delete('apple');
console.log(delet);
console.log(fruit3);
console.log(fruit3.has('apple'));
console.log(fruit3.size)

// way3

let arr1= ['apple', 'orange', 'banana']
let fruit4 = new Map([arr1])
console.log(fruit4)


// Objects as Keys

let apple = {name: 'apple'}
let orange = {name: 'orange'};
let banana = {name: 'banana'};

let fruit5 = new Map();
fruit5.set(apple,500)
fruit5.set(orange,600)
fruit5.set(banana,600)
console.log(fruit5)

// for(let obj of fruit5.keys()) {

//   for(let value in obj.keys()) {
//     console.log(value)
//   }
// }


// Map.groupBy()

// const fruit6 = [
//   {name:"apples", quantity:300},
//   {name:"bananas", quantity:500},
//   {name:"oranges", quantity:200},
//   {name:"kiwi", quantity:150}
// ];

// const result = Map.groupBy(fruits, myCallback);


// function myCallback({ quantity }) {
//   return quantity > 200 ? "ok" : "low";
// }

let person3 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person3);

console.log(person3=null)

// in null has nothin same as with undefined there is nothing,but undefined data type is undefined but unfortunately null is a object data type
// so null has no value and undefine as no value that is equal so following code will true
console.log(null == undefined)

// but

console.log(null === undefined)
// data is not equal both  undfined and null ,both are undefined and object data type 




// js regExp

// What Is a Regular Expression?
// A regular expression is a sequence of characters that forms a search pattern.

// When you search for data in a text, you can use this search pattern to describe what you are searching for.

// A regular expression can be a single character, or a more complicated pattern.

// Regular expressions can be used to perform all types of text search and text replace operations.


let sentence =  'i am searching to do and google is the good and The google is the good and the google is the good and the google is the good and'

let pattern = sentence.replace(/google/ig,'microsoft')
let m1 = sentence.match(/[goo]/gi)
let m2  = sentence.match(/goo/ig)
let number = '01776050586';
let m3 = number.match(/[0-4]/g)
let m4 = sentence.match(/(google|good)/gi)
console.log(pattern)
console.log(m1)
console.log(m2)
console.log(m3)
console.log(m4)




// try and catch


function myclickfunction(){

  let mark = document.getElementById('search').value;
  let message = document.getElementById('demo7')
  message.innerHTML = '';

      try{
            if(mark.trim() == "") throw {
              message: 'empty error',
              name: 'emptyError'
            }
            if(isNaN(mark)) throw {
              message: 'not a number error',
              name: 'notANumberError'
            };
            mark = Number(mark);
            if(mark <= 0) throw {
              message: 'negative error',
              name: 'negError'
            };
            if((mark >= 80) && ( mark <=100 )) throw {
              message : 'you have passed',
              name: 'NoError'
            }
            if(mark <80) throw {
              message: 'you have failed',
              name: 'failError'
            }
            if(mark > 80) throw {
              message: 'Invalid mark',
              name: 'invalidError'
            }
           
          }

      catch(err){
            message.innerHTML = '<strong>Erro Message:</strong>'+ err.message + ": " +"  "  + '<strong>Error code: </strong>' + err.name

        }

}