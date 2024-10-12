
// The Browser Object Model (BOM)
// There are no official standards for the Browser Object Model (BOM).

// Since modern browsers have implemented (almost) the same methods and properties for JavaScript interactivity, it is often referred to, as methods and properties of the BOM.


// main object which have deffernce part and all window object are BOW and DOM is the part of BOM
// in window there 

// location,history,navigator,screen and document



// The browser window (the browser viewport) is NOT including toolbars and scrollbars



// Window Size
// Two properties can be used to determine the size of the browser window.

// Both properties return the sizes in pixels:

// window.innerHeight - the inner height of the browser window (in pixels)
// window.innerWidth - the inner width of the browser window (in pixels)



// Other Window Methods
// Some other methods:

// window.open() - open a new window
// window.close() - close the current window
// window.moveTo() - move the current window
// window.resizeTo() - resize the current window



// JavaScript Window Screen




let h1  = document.getElementById('demo1')
let h2 = document.getElementById('demo2');
let h3 = document.getElementById('demo3');

h1.innerHTML = screen.width + 'x' + screen.height;
h2.innerHTML = screen.availWidth + 'x' + screen.availHeight + " " + screen.colorDepth + '  ' + screen.pixelDepth + ' ' + screen.orientation + '  ' + screen.screenWidth + '   ';

h3.innerHTML = window.innerWidth + 'x' + window.innerHeight


let btn1 = document.getElementById('openbtn');
let btn2 = document.getElementById('closebtn');
let mywindow
function openbtn(){
   mywindow = window.open('https://www.w3schools.com/js/tryit.asp?filename=tryjson_jsonp_create')
}

function closebtn(){
    mywindow.close();
}













// JavaScript Window Location
// The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.

// Window Location
// The window.location object can be written without the window prefix.

// Some examples:

// window.location.href returns the href (URL) of the current page
// window.location.hostname returns the domain name of the web host
// window.location.pathname returns the path and filename of the current page
// window.location.protocol returns the web protocol used (http: or https:)
// window.location.assign() loads a new document


let p1 = document.querySelector('.deno1')
let p2 = document.querySelector('.deno2');
let p3 = document.querySelector('.deno3');
let p4 = document.querySelector('.deno4');

p1.innerHTML = "href: " + window.location.href+ "  " + "protocol" + " " + window.location.protocol + " " + " location" + " " + window.location.host + ":" +"pathname" + "  " +  window.location.pathname



// Window Location Assign
// The window.location.assign() method loads a new document.


function newDoc() {
    window.location.assign("https://www.w3schools.com")
  }





//   JavaScript Window History
//   The window.history object contains the browsers history.

// Window History
// The window.history object can be written without the window prefix.

// To protect the privacy of the users, there are limitations to how JavaScript can access this object.

// Some methods:

// history.back() - same as clicking back in the browser
// history.forward() - same as clicking forward in the browser




function forward(){
    console.log('this is me')
    window.history.forward()
}



function goBack(){
    console.log('this is me')
    window.history.back()
}





// JavaScript Window Navigator
// The window.navigator object contains information about the visitor's browser.

// Window Navigator
// The window.navigator object can be written without the window prefix.

// Some examples:

// navigator.cookieEnabled
// navigator.appCodeName
// navigator.platform



// Browser Cookies
// The cookieEnabled property returns true if cookies are enabled, otherwise false:
// Browser Application Name
// The appName property returns the application name of the browser:

// Warning
// This property is removed (deprecated) in the latest web standard.

// Most browsers (IE11, Chrome, Firefox, Safari) returns Netscape as appName.



// Browser Application Code Name
// The appCodeName property returns the application code name of the browser:

// Example


let b1 = document.querySelector('.deno2')
let b2 = document.querySelector('.deno2');
let b3 = document.querySelector('.deno3');
let b4 = document.querySelector('.deno4');
let b5 = document.querySelector('.deno5');
let b6 = document.querySelector('.deno6');
let b7 = document.querySelector('.deno7');
let b8 = document.querySelector('.deno8');
b1.innerHTML = navigator.cookieEnabled;
b2.innerHTML = navigator.appName;
b3.innerHTML = navigator.appCodeName;
b4.innerHTML = navigator.userAgent;
b5.innerHTML = navigator.platform;
b6.innerHTML = navigator.language;
b7.innerHTML = navigator.onLine;
b8.innerHTML = navigator.javaEnabled;


//use popup button



// Alert Box
// An alert box is often used if you want to make sure information comes through to the user.

// When an alert box pops up, the user will have to click "OK" to proceed.

// Syntax
// window.alert("sometext");




// Confirm Box
// A confirm box is often used if you want the user to verify or accept something.

// When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.

// If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.

// Syntax
// window.confirm("sometext");
// The window.confirm() method can be written without the window prefix.




// Prompt Box
// A prompt box is often used if you want the user to input a value before entering a page.

// When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.

// If the user clicks "OK" the box returns the input value. If the user clicks "Cancel" the box returns null.

// Syntax
// window.prompt("sometext","defaultText");
// The window.prompt() method can be written without the window prefix.




let btntext = document.getElementById('text1')
let btntext2 = document.getElementById('text2');

function popup1() {
    window.alert('Welcome to the page')
}


function popup2() {
  if(  window.confirm('are sure to exit the page?')){
    window.location.href = 'https://www.w3schools.com'
  }
  else{
    btntext.innerHTML = 'user is pressed cancel button'
  }
}



function popup3(){
    
    let text = window.prompt('please enter your name','User Name')
    if(text == null || text ==''){
        text = 'user cancel the button';

    }

    else{
        text = "hello!" + " " + text
    }

    btntext2.innerHTML = text

}



// timeout function
let clearTimer
let timeoutbtn = document.getElementById('timeouttext')
function timeout(){
    clearTimer = setTimeout(function(){
        timeoutbtn.innerHTML = 'time is 2s'
    },2000)
}


function finshedtimeout(){

    clearTimeout(clearTimer)
    timeoutbtn.innerHTML = 'time is over'

}






let clearTime 
let intervalbtn = document.getElementById('intervaltext')
function setinterval(){
    clearTime = setInterval(function(){
        intervalbtn.innerHTML = new Date().toLocaleTimeString()
    },1000)
}


function finshedinterval(){
    clearInterval(clearTime)
    
}



// cookie

console.log('cookie')

// Cookies let you store user information in web pages.

// What are Cookies?
// Cookies are data, stored in small text files, on your computer.

// When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.

// Cookies were invented to solve the problem "how to remember information about the user":

// When a user visits a web page, his/her name can be stored in a cookie.
// Next time the user visits the page, the cookie "remembers" his/her name.
// Cookies are saved in name-value pairs like:

// username = John Doe
// When a browser requests a web page from a server, cookies belonging to the page are added to the request. This way the server gets the necessary data to "remember" information about users.

// None of the examples below will work if your browser has local cookies support turned off.






// Create a Cookie with JavaScript


// JavaScript can create, read, and delete cookies with the document.cookie property.

// With JavaScript, a cookie can be created like this:

// document.cookie = "username=John Doe";
// You can also add an expiry date (in UTC time). By default, the cookie is deleted when the browser is closed:

// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
// With a path parameter, you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.

// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";



//1
document.cookie = 'username = mohmmad masum';
//2
document.cookie = "username = mohmmad masum,expires= Thu, 18 Dec 2024 12:00:00 UTC" ;

//3


document.cookie = "username = mohmmad masum,expires= 'Thu, 18 Dec 2024 12:00:00 UTC; path=/";


// read cookies with js

let x = document.cookie;
console.log(x)




// document.cookie will return all cookies in one string much like: cookie1=value; cookie2=value; cookie3=value;



// Change a Cookie with JavaScript
// With JavaScript, you can change a cookie the same way as you create it:


document.cookie = "username=John Smith; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/";

let x1 = document.cookie

console.log(x1)



// Delete a Cookie with JavaScript
// Deleting a cookie is very simple.

// You don't have to specify a cookie value when you delete a cookie.

// Just set the expires parameter to a past date:



document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

console.log(document.cookie)

// You should define the cookie path to ensure that you delete the right cookie.

// Some browsers will not let you delete a cookie if you don't specify the path.




// The Cookie String
// The document.cookie property looks like a normal text string. But it is not.

// Even if you write a whole cookie string to document.cookie, when you read it out again, you can only see the name-value pair of it.

// If you set a new cookie, older cookies are not overwritten. The new cookie is added to document.cookie, so if you read document.cookie again you will get something like:

// cookie1 = value; cookie2 = value;

// Display All Cookies  Create Cookie 1  Create Cookie 2 Delete Cookie 1  Delete Cookie 2

// If you want to find the value of one specified cookie, you must write a JavaScript function that searches for the cookie value in the cookie string.






// JavaScript Cookie Example
// In the example to follow, we will create a cookie that stores the name of a visitor.

// The first time a visitor arrives to the web page, he/she will be asked to fill in his/her name. The name is then stored in a cookie.

// The next time the visitor arrives at the same page, he/she will get a welcome message.

// For the example we will create 3 JavaScript functions:

// A function to set a cookie value
// A function to get a cookie value
// A function to check a cookie value



// A Function to Set a Cookie
// First, we create a function that stores the name of the visitor in a cookie variable:



// create cookie

function createCookie(cname,cvalue,exdays){
    const d = new Date()
    d.setTime(d.getTime()+ (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "; path=/";
    



}


// document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";



// get cookie

function getCookie(cname){
    let name = cname + "=";
   

    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++){

        let c = ca[i];
        if( c.indexOf(name) === 0){

            let val = c.substring(name.length)
            console.log(val)

        }
        
       

    }

    

}







// check cookie


function checkCookie(){
    console.log('check cookie is ok')
}