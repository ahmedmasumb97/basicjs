// json details

//1.Json: javascript object notation
//2.json is text format for storing and transpoting data 
//3.json is self decribing and easy to read and understand


// example of json data


let data = '{"name":"masum","description":"i am masum","location":"dhaka"}'
console.log(data)


// What is JSON?
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data-interchange format
// JSON is plain text written in JavaScript object notation
// JSON is used to send data between computers
// JSON is language independent *



// The JSON syntax is derived from JavaScript object notation, but the JSON format is text only.

// Code for reading and generating JSON exists in many programming languages.







// Why Use JSON?
// The JSON format is syntactically similar to the code for creating JavaScript objects. Because of this, a JavaScript program can easily convert JSON data into JavaScript objects.

// Since the format is text only, JSON data can easily be sent between computers, and used by any programming language.

// JavaScript has a built in function for converting JSON strings into JavaScript objects:

// JSON.parse()

// JavaScript also has a built in function for converting an object into a JSON string:

// JSON.stringify()




// You can receive pure text from a server and use it as a JavaScript object.

// You can send a JavaScript object to a server in pure text format.

// You can work with data as JavaScript objects, with no complicated parsing and translations.



// Storing Data
// When storing data, the data has to be a certain format, and regardless of where you choose to store it, text is always one of the legal formats.

// JSON makes it possible to store JavaScript objects as text.




//json syntex


// JSON Syntax Rules
// JSON syntax is derived from JavaScript object notation syntax:

// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays


// {"name":"John"}
// In JavaScript, keys can be strings, numbers, or identifier names:











// JSON Values
// In JSON, values must be one of the following data types:

// a string
// a number
// an object
// an array
// a boolean
// null
// In JavaScript values can be all of the above, plus any other valid JavaScript expression, including:

// a function
// a date
// undefined
// In JSON, string values must be written with double quotes:













// 1. JSON (JavaScript Object Notation):
// Data Format: JSON is a string format used to represent structured data. It is primarily used for transmitting data between a server and a web application, or between applications.
// Structure: It uses key-value pairs where the keys must be strings, and values can be strings, numbers, arrays, booleans, null, or other JSON objects.
// Syntax: JSON requires double quotes around keys and string values.
// Readability: JSON is human-readable, but it is a text format, not a native object.
// Example:
// json
// Copy code
// {
//   "name": "Masum",
//   "age": 25,
//   "isDeveloper": true,
//   "languages": ["Python", "JavaScript"]
// }
// Usage: To use JSON in JavaScript, it has to be parsed into a JavaScript object using JSON.parse().
// 2. JavaScript Object:
// Data Type: A JavaScript object is a native data structure in JavaScript. It can store data and functions and is part of the language itself.
// Structure: It also uses key-value pairs, but the keys can be strings, symbols, or numbers. The values can be anything, including functions.
// Syntax: In JavaScript objects, keys can be written without quotes, and string values can use either single or double quotes.
// Readability: JavaScript objects are directly used in JavaScript code, and they are not intended for data interchange.
// Example:
// javascript
// Copy code
// let person = {
//   name: "Masum",
//   age: 25,
//   isDeveloper: true,
//   languages: ["Python", "JavaScript"],
//   greet: function() {
//     console.log("Hello!");
//   }
// };
// Key Differences:
// Quotes: In JSON, keys must be in double quotes, while in JavaScript objects, they can be unquoted if they follow JavaScript naming conventions.
// Usage: JSON is a data format for communication, while JavaScript objects are native code constructs used within the JavaScript language.
// Functions: JSON does not support functions as values, while JavaScript objects can store and execute functions.
// Example of Conversion:
// JavaScript Object to JSON: JSON.stringify(person)
// JSON to JavaScript Object: JSON.parse(jsonString)












// JSON vs XML


// Both JSON and XML can be used to receive data from a web server.


let json = {"employees" : [

{"firstName": "mohmmada", "lastName": "Masum"},
{"firstName": "hasna", "lastName": "ahmed"},
{"firstName": "ali", "lastName": "jahan"},

]}





// XML Example
// <employees>
//   <employee>
//     <firstName>John</firstName> <lastName>Doe</lastName>
//   </employee>
//   <employee>
//     <firstName>Anna</firstName> <lastName>Smith</lastName>
//   </employee>
//   <employee>
//     <firstName>Peter</firstName> <lastName>Jones</lastName>
//   </employee>
// </employees>






// JSON is Like XML Because


// Both JSON and XML are "self describing" (human readable)
// Both JSON and XML are hierarchical (values within values)
// Both JSON and XML can be parsed and used by lots of programming languages
// Both JSON and XML can be fetched with an XMLHttpRequest
// JSON is Unlike XML Because
// JSON doesn't use end tag
// JSON is shorter
// JSON is quicker to read and write
// JSON can use arrays
// The biggest difference is:

//  XML has to be parsed with an XML parser. JSON can be parsed by a standard JavaScript function.


// Why JSON is Better Than XML
// XML is much more difficult to parse than JSON.
// JSON is parsed into a ready-to-use JavaScript object.





// For AJAX applications, JSON is faster and easier than XML:

// Using XML

// Fetch an XML document
// Use the XML DOM to loop through the document
// Extract values and store in variables
// Using JSON

// Fetch a JSON string
// JSON.Parse the JSON string






// Valid Data Types
// In JSON, values must be one of the following data types:

// a string
// a number
// an object (JSON object)
// an array
// a boolean
// null



// JSON values cannot be one of the following data types:

// a function
// a date
// undefined





// JSON.parse()
// A common use of JSON is to exchange data to/from a web server.

// When receiving data from a web server, the data is always a string.

// Parse the data with JSON.parse(), and the data becomes a JavaScript object.



const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';

JSON.stringify(text)
console.log(text)



// . Structure & Syntax:
// JSON: Key-value pairs, lightweight, uses {} for objects and [] for arrays.
// XML: Tag-based hierarchy, more verbose, uses <tag></tag> structure.
// 2. Data Size:
// JSON: Compact, easier to read.
// XML: Larger, more tags make it harder to read.
// 3. Ease of Use:
// JSON: Simple to parse, especially in JavaScript (JSON.parse(), JSON.stringify()).
// XML: More complex parsing, requires specialized tools.
// 4. Data Types:
// JSON: Supports strings, numbers, booleans, arrays, and objects.
// XML: Treats everything as strings.
// 5. Use Cases:
// JSON: Web APIs, modern web apps, faster processing.
// XML: Older systems, document-based data, configuration files.
// 6. Attributes:
// JSON: No attributes, only key-value pairs.
// XML: Supports attributes in tags.
// 7. Validation:
// JSON: Optional, uses JSON Schema.
// XML: Strong validation with DTD and XSD.
// 8. Speed:
// JSON: Faster, more efficient.
// XML: Slower due to verbosity and complexity.
// 9. Comments:
// JSON: No comments allowed.
// XML: Supports comments (<!-- comment -->).
// Conclusion:
// JSON: Better for lightweight, fast, web-based applications.
// XML: Suitable for complex documents and systems requiring strict data validation.



// JSON is simpler, faster, and more suited for web applications and APIs, especially when working with JavaScript. XML, while more verbose and complex, offers more flexibility and is often used in environments where document structure and data validation are critical.

//can not use new date,undefine and function but if you want to sent a birth date use birthDate as string

let jsonString = '{"name":"Hasan mahmood","location":"Gazipur", "birth":"1971-03-26","education":"bsc in eee"}'

let obj = JSON.parse(jsonString)

console.log(obj) 
console.log(new Date(obj.birth))



// another way


// Parsing Dates
// Date objects are not allowed in JSON.

// If you need to include a date, write it as a string.

// You can convert it back into a date object later:

let jsonString1 = '{"name":"Hasan mahmood","location":"Gazipur", "birth":"1971-03-26","education":"bsc in eee"}'

let obj1 = JSON.parse(jsonString1, function(key,value){
    console.log(key,value)

    if( value == 'birth' ){
        return new Date(value)
    }

    return value
    
})

console.log(obj1) 




// function
// it is not best prectise is it is bad practices


let jsonString2 = '{"name":"Hasan mahmood","location":"Gazipur", "birth":"1971-03-26","education":"bsc in eee","age":"function(){return 27}" }'

let obj2 = JSON.parse(jsonString2)

console.log(obj2) 
//this is function it is text formate 

// eval convet a text to code ,so it is terible to web app 
//never try to use eval function
obj2.age =  eval("(" + obj2.age + ")");
console.log(obj2.age())




// JSON.stringify()
// A common use of JSON is to exchange data to/from a web server.

// When sending data to a web server, the data has to be a string.

// Convert a JavaScript object into a string with JSON.stringify().

// The result will be a string following the JSON notation.

// it is used to data storing ,sorting, transpoting and

// Exceptions
// Stringify Dates
// In JSON, date objects are not allowed. The JSON.stringify() function will convert any dates into strings.


const obj3 = {name: "John", today: new Date(), city : "New York"};
dataString = JSON.stringify(obj3);
console.log(dataString)


// Stringify Functions
// In JSON, functions are not allowed as object values.

// The JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value:


const obj4 = {name: "John", age: function () {return 30;}, city: "New York"};
const myJSON = JSON.stringify(obj4);
console.log(myJSON);


// If you send functions using JSON, the functions will lose their scope, and the receiver would have to use eval() to convert them back into functions.







// SON Object Literals
// This is a JSON string:

// '{"name":"John", "age":30, "car":null}'
// Inside the JSON string there is a JSON object literal:

// {"name":"John", "age":30, "car":null}


// JSON object literals are surrounded by curly braces {}.

// JSON object literals contains key/value pairs.

// Keys and values are separated by a colon.

// Keys must be strings, and values must be a valid JSON data type:

// string
// number
// object
// array
// boolean
// null
// Each key/value pair is separated by a comma.

// It is a common mistake to call a JSON object literal "a JSON object".

// when convert json to the js object using JSON.parse() that is js object not json object.there are nothing json object

// JSON cannot be an object. JSON is a string format.

// The data is only JSON when it is in a string format. When it is converted to a JavaScript variable, it becomes a JavaScript object.






// Accessing Object Values
// You can access object values by using dot (.) notation:

// Example
// const myJSON = '{"name":"John", "age":30, "car":null}';
// const myObj = JSON.parse(myJSON);
// x = myObj.name;




// Looping an Object
// You can loop through object properties with a for-in loop:

// Example
// const myJSON = '{"name":"John", "age":30, "car":null}';
// const myObj = JSON.parse(myJSON);

// let text = "";
// for (const x in myObj) {
//   text += x + ", ";
// }



// json server


async function fetchData(){
    
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = response.json()
    console.log(data)

   
}


fetchData()