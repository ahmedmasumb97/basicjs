// JSON is a format for storing and transporting data.

// JSON is often used when data is sent from a server to a web page.


// What is JSON?
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent *
// JSON is "self-describing" and easy to understand
// * The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.




data = {
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
}



// JSON Syntax Rules
// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays


// JSON Objects
// JSON objects are written inside curly braces.

// Just like in JavaScript, objects can contain multiple name/value pairs:

// {"firstName":"John", "lastName":"Doe"}



// JSON Arrays
// JSON arrays are written inside square brackets.

// Just like in JavaScript, an array can contain objects:

// "employees":[
//   {"firstName":"John", "lastName":"Doe"},
//   {"firstName":"Anna", "lastName":"Smith"},
//   {"firstName":"Peter", "lastName":"Jones"}
// ]
// In the example above, the object "employees" is an array. It contains three objects.

// Each object is a record of a person (with a first name and a last name).




let json_record =`

{

"employees":[

    {"firstName": "John", "lastName": "Doe", "age": 25, "city": "New York"},
    {"firstName": "anna", "lastName": "Smith", "age": 24, "city": "New York"},
    {"firstName": "Peter", "lastName": "Jones", "age": 27, "city": "New York"}
    ]
}

`
let data_obj = JSON.parse(json_record)
console.log(data_obj)

for(let x in data_obj) {
    console.log(x)
    data = data_obj[x]
    for(let y in data){
        data2 = data[y]
        for(let z in data2){
            console.log(data2[z])
        }
    }
}