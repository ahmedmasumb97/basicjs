// Web APIs - Introduction
// A Web API is a developer's dream.

// It can extend the functionality of the browser
// It can greatly simplify complex functions
// It can provide easy syntax to complex code




// What is Web API?
// API stands for Application Programming Interface.

// A Web API is an application programming interface for the Web.

// A Browser API can extend the functionality of a web browser.

// A Server API can extend the functionality of a web server.




// Browser APIs
// All browsers have a set of built-in Web APIs to support complex operations, and to help accessing data.

// For example, the Geolocation API can return the coordinates of where the browser is located.


// Constraint Validation DOM Methods
// Property	Description
// checkValidity()	Returns true if an input element contains valid data.
// setsetCustomValidity()	Sets the validationMessage property of an input element.


let inputObj = document.getElementById('number')
let p1 = document.getElementById('demo1')

function validation(){
    if(!inputObj.checkValidity()){

        p1.innerHTML = inputObj.validationMessage

    }
}



// checkValidity() method have three properties like
//1.validity : Contains boolean properties related to the validity of an input element.

//2.validationMessage : Contains the message a browser will display when the validity is false.

//3.willValidate: Indicates if an input element will be validated.



// Validity Properties
// The validity property of an input element contains a number of properties related to the validity of data:

// there are many properties in validity

//customeError, patternMimatch,rangeOverflow,rangeUnderflow,stepMismatch,tooLong,typeMismatch,valueMissing,valid

let p2 = document.getElementById('demo2');
let inputObj1 = document.getElementById('number1');

function validation1(){
    console.log(p2,inputObj1)

    if(inputObj1.validity.rangeOverflow	){
        inputObj1.setCustomValidity('you have entered range overflow value')
    }
    else if(inputObj1.validity.rangeUnderflow){
        inputObj1.setCustomValidity('you have entered range underflow value')
    }

    else if(inputObj1.validity.valueMissing){
        inputObj1.setCustomValidity('value is missing')
    }


    if(!inputObj1.checkValidity()){
        p2.innerHTML = inputObj1.validationMessage
    }

}