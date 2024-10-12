
// get form input filed value
let form  = document.forms[0]['fname'].value
console.log(form)


// get form by name of form
let form1  = document.forms['download']['lname'].value
console.log(form1)




// get form by name of form

function function1(){
    let form2  = document.forms['reset']['lname'].value
    // let form2 = document.getElementById('lname1').value
    let p1 = document.getElementById('demo1')
    
    if(form2 == ''){

        p1.innerHTML = "Please fill out this field"

    }

    else if(isNaN(form2)){
        p1.innerHTML = "Please enter a number"
    }

    else if ( (form2 < 0)||(form2 > 10)){
        p1.innerHTML = 'please enter a number between 0 and 10'
    }

    else{
        p1.innerHTML = "input is ok"
    }
}



// css class


let btn1 = document.getElementById('btn1');
let p2 = document.getElementById('demo2');

btn1.addEventListener('click', function(){

   p2.style.backgroundColor = 'red';

})



// css animation

// take html tag

let btn2 = document.getElementById('btn2');
let child = document.getElementById('child');
let parent = document.getElementById('parent');

// add css style
parent.style.width = '300px'
parent.style.height = '300px'
parent.style.position ='relative';
parent.style.margin = '10px auto'
parent.style.backgroundColor = 'white';
parent.style.boxShadow = '3px 2px 3px 3px rgba(0, 0, 0, 0.4)'

child.style.backgroundColor = 'yellow';
child.style.width = '50px';
child.style.height = '50px';
child.style.position = 'absolute';


// take button and add addEventListener to the button
let button1 = document.getElementById('btn2');


button1.addEventListener('click', function(){

   let pos = 0;
   let end = setInterval(mymove,5)
   function mymove(){

    if(pos == 250){
        clearInterval(end)
    }
    pos++
    child.style.top = pos+ 'px'
    child.style.left = pos+ 'px'


   }

})



// here this keyword is define is p tag
function chnageFunction(ptext){
    console.log(ptext)
    ptext.innerHTML = 'hello! I am this keyword!'

    
}




// The onload and onunload Events
// The onload and onunload events are triggered when the user enters or leaves the page.

// The onload event can be used to check the visitor's browser type and browser version, and load the proper version of the web page based on the information.

// The onload and onunload events can be used to deal with cookies.


let body = document.getElementById("body")
function design(){
    body.style.width = '1200px'
    body.style.height = 'auto'
    body.style.backgroundColor = 'teal'
    body.style.margin = '0px auto'
    body.style.boxShadow = '2px 4px 4px white'
}



function design1(){
    body.style.width = '1200px'
    body.style.height = 'auto'
    body.style.backgroundColor = 'red'
    body.style.margin = '0px auto'
    body.style.boxShadow = '2px 4px 4px white'
    print(body)
}




//oninput

let input = document.getElementById('myInput')

// function uppercase(){
//     input.value = input.value.toUpperCase()
// }

input.addEventListener('input', function(){
    input.value = input.value.toLowerCase()
})


//onchnage
// if need to do something every keypress into the input then need to onchange event
let input1 = document.getElementById('myInput1');

input1.addEventListener('change', function(){
    console.log('onchange is active')
})





// The onmouseover and onmouseout Events
// The onmouseover and onmouseout events can be used to trigger a function when the user mouses over, or out of, an HTML element:

// mouseover and mouseout
let mouse1 = document.getElementById('demo4');
mouse1.style.padding = '10px';
mouse1.style.backgroundColor = 'yellow';
mouse1.style.cursor = 'pointer';
mouse1.style.width = '200px';
mouse1.style.height = '200px';
mouse1.style.margin = '10px auto';

function func1(id){
    id.style.backgroundColor = 'red';
    id.style.color = 'white';
    id.innerHTML = "onmouseover"
   
    
}

function func2(id){
    id.style.backgroundColor = 'blue';
    id.style.color = 'white';
    id.innerHTML = "onmouseout"
   
    
}





//onmousedown
let mouse2 = document.getElementById('demo5');
mouse2.style.padding = '10px';
mouse2.style.backgroundColor = 'yellow';
mouse2.style.cursor = 'pointer';
mouse2.style.width = '200px';
mouse2.style.height = '200px'

function func3(id){
    id.style.backgroundColor = 'green';
    id.style.color = 'black';
    id.innerHTML = "onmousedown"
}


function func4(id){
    id.style.backgroundColor = 'orange';
    id.style.color = 'black';
    id.innerHTML = "onmouseout"
}










// The addEventListener() method attaches an event handler to the specified element.

// The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.

// You can add many event handlers to one element.

// You can add many event handlers of the same type to one element, i.e two "click" events.

// You can add event listeners to any DOM object not only HTML elements. i.e the window object.

// The addEventListener() method makes it easier to control how the event reacts to bubbling.

// When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.

// You can easily remove an event listener by using the removeEventListener() method.




// Syntax
// element.addEventListener(event, function, useCapture);


// The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)

// The second parameter is the function we want to call when the event occurs.

// The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.


//addenventlistener

let mouse3 = document.getElementById('demo6');
let ptex = document.getElementById('pid')
mouse3.style.padding = '10px';
mouse3.style.width = '100px'
mouse3.style.margin = '30px auto';

mouse3.addEventListener('click',fun1)
mouse3.addEventListener('mouseover',fun2)
mouse3.addEventListener('mouseout',fun3)




function fun1(){

   ptex.innerHTML += 'click'+ "<br />"

}

function fun2(){

     ptex.innerHTML += 'mouseover' + "<br />"

}


function fun3(){

     ptex.innerHTML += 'mouseout and me' + "<br />"

}



//how sent a parameter in addEventListener

function myfunction1(text){
    console.log(text)

}


const button2 = document.getElementById('demo7');

button2.addEventListener('click', function(){
    myfunction1('I am addeventlistener parameter');
})


// Event Bubbling or Event Capturing?
// There are two ways of event propagation in the HTML DOM, bubbling and capturing.

// Event propagation is a way of defining the element order when an event occurs. If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?

// In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.

// In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.

// With the addEventListener() method you can specify the propagation type by using the "useCapture"


// Event Bubbling or Event Capturing?

// by defult it is bubling for use this false and write true it will be envent capturing


// addEventListener(event, function, useCapture);



let paraent1 = document.getElementById('parant1');
let child1 =  document.getElementById('child1');

parent1.addEventListener('click',function(){
    console.log('I am parant')
},false);


child1.addEventListener('click',function(){
    console.log('I am child')
},false)



// envent capturing. it click first parent and after that will be the child


let paraent2 = document.getElementById('parant2');
let child2 =  document.getElementById('child2');

parent2.addEventListener('click',function(){
    console.log('I am parant')
},true);


child2.addEventListener('click',function(){
    console.log('I am child')
},true)




// remove addeventlistener


let button3 = document.getElementById('demo10')
let button4 = document.getElementById('demo11')
let pbox = document.getElementById('pt1')
pbox.addEventListener('mouseover', myfunction2)

function myfunction2(){
    button4.innerHTML = Math.random() *10
}

button3.addEventListener('click',function(){
    pbox.removeEventListener('mouseover', myfunction2)



    
})







//DOM nodes




// According to the  HTML DOM standard, everything in an HTML document is a node:

// The entire document is a document node
// Every HTML element is an element node
// The text inside HTML elements are text nodes
// Every HTML attribute is an attribute node (deprecated)
// All comments are comment nodes


// https://www.w3schools.com/js/pic_htmltree.gif


// Node Relationships
// The nodes in the node tree have a hierarchical relationship to each other.

// The terms parent, child, and sibling are used to describe the relationships.

// In a node tree, the top node is called the root (or root node)
// Every node has exactly one parent, except the root (which has no parent)
// A node can have a number of children
// Siblings (brothers or sisters) are nodes with the same parent
// https://www.w3schools.com/js/pic_navigate.gif



// rom the HTML above you can read:

// <html> is the root node
// <html> has no parents
// <html> is the parent of <head> and <body>
// <head> is the first child of <html>
// <body> is the last child of <html>
// and:

// <head> has one child: <title>
// <title> has one child (a text node): "DOM Tutorial"
// <body> has two children: <h1> and <p>
// <h1> has one child: "DOM Lesson one"
// <p> has one child: "Hello world!"
// <h1> and <p> are siblings





// Navigating Between Nodes
// You can use the following node properties to navigate between nodes with JavaScript:

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling



// Child Nodes and Node Values
// A common error in DOM processing is to expect an element node to contain text.

// <title id="demo">DOM Tutorial</title>
// The element node <title> (in the example above) does not contain text.

// It contains a text node with the value "DOM Tutorial".

// The value of the text node can be accessed by the node's innerHTML property:




// Accessing the innerHTML property is the same as accessing the nodeValue of the first child:

// myTitle = document.getElementById("demo").firstChild.nodeValue;




// Accessing the first child can also be done like this:

// myTitle = document.getElementById("demo").childNodes[0].nodeValue;
// All the (3) following examples retrieves the text of an <h1> element and copies it into a <p> element:




// DOM Root Nodes
// There are two special properties that allow access to the full document:

// document.body - The body of the document
// document.documentElement - The full document



console.log("document.documentElement")
console.log(document.documentElement)

console.log("document.body")
console.log(document.body)

console.log('document url')
console.log(document.documentURI)

console.log('document embeds ')
console.log(document.embeds)

console.log('current script')
console.log(document.currentScript)

console.log('document cookies')
console.log(document.cookie)



// The nodeName Property
// The nodeName property specifies the name of a node.

// nodeName is read-only
// nodeName of an element node is the same as the tag name
// nodeName of an attribute node is the attribute name
// nodeName of a text node is always #text
// nodeName of the document node is always #document

// Note: nodeName always contains the uppercase tag name of an HTML element.





// The nodeValue Property
// The nodeValue property specifies the value of a node.

// nodeValue for element nodes is null
// nodeValue for text nodes is the text itself
// nodeValue for attribute nodes is the attribute value
// The nodeType Property
// The nodeType property is read only. It returns the type of a node.



let parentDiv = document.querySelector('.parent-div');
console.log('parentDiv nodeType', parentDiv.firstChild.nodeValue);


let childDiv = document.querySelector('.child-div');
console.log('childDiv nodeType', childDiv.firstChild.nodeValue);

// having text node along child nodes
let grandChild = document.querySelector('.child-div')


//way1

let way1 = grandChild.childNodes
way1.forEach(function(value,index,array){
    console.log(value.innerHTML)
})
console.log(way1)






// dom nodes (createelement)
console.log("==== dom nodes=====")
let para = document.createElement('p')
let paranode = document.createTextNode('Hello I am created p element')
para.appendChild(paranode)

// get the element whereas i insert the element

let div = document.querySelector('.div');
let p3 = document.querySelector('.item3');
let p4 = document.querySelector('.item4');

// div.appendChild(para)
div.insertBefore(para, p3)

// div.replaceChild(para,p3)

// p4.remove()


// The remove() method does not work in older browsers, see the example below on how to use removeChild() instead.

div.removeChild(p4)

console.log(div)







//html dom collections


// The HTMLCollection Object
// The getElementsByTagName() method returns an HTMLCollection object.

// An HTMLCollection object is an array-like list (collection) of HTML elements.

// The following code selects all <p> elements in a document:


let allPTag = document.getElementsByTagName("p");
console.log(allPTag)


// The elements in the collection can be accessed by an index number.

// To access the second <p> element you can write:

console.log(allPTag[1])

// The length property is useful when you want to loop through the elements in a collection:



console.log(allPTag.length)



// An HTMLCollection is NOT an array!

// An HTMLCollection may look like an array, but it is not.

// You can loop through the list and refer to the elements with a number (just like an array).

// However, you cannot use array methods like valueOf(), pop(), push(), or join() on an HTMLCollection.


let NodeList = document.querySelectorAll('p')
console.log(NodeList)



// The elements in the NodeList can be accessed by an index number.

// To access the second <p> node you can write:

console.log(NodeList[1])


// HTML DOM Node List Length
// The length property defines the number of nodes in a node list:


const myNodelist = document.querySelectorAll("p");
for (let i = 0; i < myNodelist.length; i++) {
  myNodelist[i].style.color = "yellow";
}


// The Difference Between an HTMLCollection and a NodeList

// A NodeList and an HTMLcollection is very much the same thing.

// Both are array-like collections (lists) of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0.

// Both have a length property that returns the number of elements in the list (collection).

// An HTMLCollection is a collection of document elements.

// A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).

// HTMLCollection items can be accessed by their name, id, or index number.

// NodeList items can only be accessed by their index number.

// An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.

// A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.

// The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.

// The querySelectorAll() method returns a static NodeList.

// The childNodes property returns a live NodeList.

// Not an Array!
// A NodeList may look like an array, but it is not.

// You can loop through a NodeList and refer to its nodes by index.

// But, you cannot use Array methods like push(), pop(), or join() on a NodeList.