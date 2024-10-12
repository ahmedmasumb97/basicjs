// 



// fucntion sewuence you can write functions more and more but it can exicute until you do not call functions and it can  not show thouse functions serially according to the function definition and it can show accordingly with functions callings

function first(){
    console.log('first function')

}

function second(){
    console.log('second function')

}

function third(){
    console.log('third function')

}

// show those according to the function callings and this is sequence of functions

third()
first()
second()



// Sequence Control

// Sometimes you would like to have better control over when to execute a function.

// Suppose you want to do a calculation, and then display the result.

// You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:


// display function into console log
function display(some){
    console.log('Result: ',some)
}

//calculate function
function myCalculator(a, b){
    let sum = a + b;
    return sum;
}

//function calling
let result = myCalculator(10,30)

display(result)




//callback function


// A callback function is a function passed as an argument to another function. It's a powerful tool that can make your code more flexible and reusable.




// Callback function example


function display1(result) {
    console.log(result);

}

// call the callback function inside the function which take callbacks as a agrument 
function calculatetor(num1,num2,callback){
    let sum = num1 + num2;
    callback(sum)
    
}


calculatetor(10,20,display1)



// or 

function display2(result) {
    console.log(result);
}

function calculatetor1(num1,num2,callback){
    let sum = num1 + num2;
    callback(sum)
}
// this want to get a parameter from the callcutor1 function and pass the pass the parameter when callback is called inside the calculator1 function
calculatetor1(10,20,function(sum){
    console.log('The sum is : ' + sum)
});



function mydispaly(some){
    console.log('Result: ',some)
}


function mycallback(num1,num2,callback){

    let sum = num1 + num2;
    callback(sum)

}



mycallback(10,20,function(result){
    console.log(result)
})



const number = [4, 1, -20, -7, 5, 9, -6];

// keeping only positive numbers using callback function

// function positive_number(callback){
//     return 
// }

// positive_number(number,function(){

// })


// let pst = postive1(number, (x) => {
//     x >= 0
// })



const number1 = [4, 1, -20, -7, 5, 9, -6];
let list1 = []
function positive1(number,callback){
    console.log(number);

    for(let x of number){
        
        if(x >= 0){
            
            callback(x)
            
        }

        

   
    }

 
   

}


// settimeout function and setinterval function are used to aysncronise 

p1 = document.getElementById('time1');

let p2 = document.getElementById('time2');

let p3 = document.getElementById('time3');

let myinterval = setInterval(myfunction,1000)

function myfunction(){
    let time = new Date();
    p1.innerHTML = time.getHours();
    p2.innerHTML = time.getMinutes();
    p3.innerHTML = time.getSeconds();
    
}


addEventListener('click',stoptime)

function stoptime(){
    console.log('stop')
    clearInterval(myinterval)
}







const payment = true;
let marks = 70;

function endroll(callback) {
    console.log('Course endroll is in progress')
    setTimeout(function(){
        if(payment){
            callback()
        }

        else{
            console.log('Payment failed')
        }
    },2000)

}



function progress(callback) {
    console.log('Course progress is in progress');

    setTimeout(function(){
        if(marks >= 80){
            callback()
        }

        else{
            console.log('Marks are less than 80')
        }
    },3000)
}




function getCertificate(){
    console.log('Certificate is in progress');

    setTimeout(function(){
        console.log('Congratulations! You have passed the course')
        
    },1000)
}

// when calling the endroll function with callback calling and this time progress is called but when called the progress function it want to get a callback ,it is  not possible to it callback function when endroll function is calling.so get rise an error message

// endroll(progress)
// progress(getCertificate)

// for this we can use annonumus function to manage those problems

endroll(function(){
    progress(getCertificate)

})


























positive1(number1,function(result){

    list1.push(result)
    

})


console.log(list1);

let bum  = 2;
console.log(bum **=3)
bum = bum ** 3


let taka = 1;
while( taka <= 10){
    console.log(taka);
    taka++
    console.log(taka);
}

console.log(taka)


// let nan = 1;
// for(; nan <=10;nan++){
//     console.log(nan);
//     nan++
// }

// console.log(nan)


let num4 = 10;
// when come 10 and it  do ths : num4 = num4-1,it boolen(num4) it comes true and value decrease from 10 to 9 and continue and when come 0 and check it and it is false and it decrease the number of -1
// 0 is false so loop is stop but it will decrease the number of -1 which can found outside of the loop
while(num4--){
    console.log(num4);
}

//when use for and while 
//when i know how many times loop need and cerain period or certin thing i know , in this time use for loop;
//when i don not know how many times loop need or iteration ,this time use while example while  age >=18 and i don't know how many times loop need,here use while loop