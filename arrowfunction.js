// Arrow functions were introduced in ES6.

// Arrow functions allow us to write shorter function syntax:

let arrow = (a,b) => a + b; 


hello = () =>{
    return "hello world"
}




// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:


hello1 = () => "hello world"



// Arrow Function With Parameters:

hello2 = (name,location) => "hello world" + " " + name + " " + location;

console.log(hello2('Masum','Gazipur'))



// if only one parameter

hello3 =  value => "hello world" + " " + value;
console.log(hello3('Masum',))




// this keyword  for normal function and arrow function

let normal_button = document.getElementById('btn1q');
let p_text = document.getElementById('demo8')


normal = () => {
    p_text.innerHTML += this;
}



// load function


window.addEventListener('load',normal)


// addeventlistener function
normal_button.addEventListener('click',normal)