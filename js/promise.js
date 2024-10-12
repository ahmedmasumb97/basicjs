// "I Promise a Result!"

// "Producing code" is code that can take some time

// "Consuming code" is code that must wait for the result

// A Promise is an Object that links Producing code and Consuming code




// JavaScript Promise Object
// A Promise contains both the producing code and calls to the consuming code:




// Promise Object Properties
// A JavaScript Promise object can be:

// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.



// note: You cannot access the Promise properties state and result.

// You must use a Promise method to handle promises.


const status  = false




// promise body or defination or producing code
// const promise = new Promise(function(resove,reject){


//     setTimeout(function(){
//         if(status){
//             resove('Data fetched successfully')
//         }
//         else{
//             reject('Failed to fetch data')
//         }
//     },2000)



// })


// // promise call or consuming code


// promise
//     .then(function(data){
//         console.log(data)

//     })
//     .catch(
//         function(error){
//             console.log(error)
//         }
//     )



    let mark = 70
    let admission = true

   
   function endroll(){

    const promise = new Promise(function(resolve, reject){

        console.log('addmission is running');
    
        setTimeout(function(){
            if(admission){
                resolve('admission is already done')
            }
            else{
                reject('admission is not done')
            }
        },2000)
    
        })


    return promise
    
   }




function exam(){

    const promise = new Promise(function(resolve, reject){
        console.log('examination is running');

        setTimeout(function(){
            if(mark >= 80){
                resolve(`welcome ,you have passed in the exam successfully and your mark is ${mark}`)
            }
            else{
                reject(`sorry! you can not pass in the exam and your mark is ${mark}`)
            }
        },3000)
    })

    return promise

}



function getCertificate(){
    const promise = new Promise(function(resolve, reject){
        console.log('certificate is being prepared,please wait');
    
        setTimeout(function(){
            resolve('welcome! you have got the certificate')
        },1000)
    })


    return promise


    
}



// which promise has no rejcet 
// const promise = Promise.resolve("welcome! you have got the certificate")




endroll()
    .then(exam)
    .then(getCertificate)
    .then(function(value){
        console.log(value)
    })

    .catch(function(error){
        console.log(error)
    })



// endroll()
//     .then(function(value){
//         console.log(value)
//         exam()
//     })

//     .then(function(value){
//         console.log(value)
//         getCertificate()
//     })

//     .catch(function(error){
//         console.log(error)
//     })
