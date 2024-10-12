
// "async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise




// Await Syntax
// The await keyword can only be used inside an async function.

// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:




// The two arguments (resolve and reject) are pre-defined by JavaScript.

// We will not create them, but call one of them when the executor function is ready.

// Very often we will not need a reject function.



async function mydisplay(){
    let promise = new Promise(function(resolve){
        resolve('promise me '); 
    })
    
    console.log(await promise)

}


mydisplay()

// asyn function returns promise by default
// for  writting await and async functions need to write a function

async function hello(){

    return "hello world"

}

console.log(hello())

//outside of the function is used asyn so inside the function you can use await otherwise it is not possible to


let mark = 70;
let payment = true;


endroll = () => {
    console.log('endroll is progressing ,please wait')
    const promise = new Promise((resolve, reject) => {

        setTimeout( () =>{

            if(payment){
                resolve('payment is done! so admission is done')
            }

            else{
                reject('payment failed so admission process is not done')
            }

        },2000)
    });

    return promise;
}



exam = () =>{
    console.log('exam is running')
    const promise = new Promise((resolve, reject) => {

        setTimeout( () =>{

            if(mark >= 80){
                resolve(`Congratulations! You passed the exam with mark ${mark}`)
            }

            else{
                reject(`Sorry! You failed the exam with mark ${mark}`)
            }

        },3000)
    });

    return promise
}



getCertificate = () =>{
    console.log('certificate is being progressed so keep patient to get the certificate')

    const promise = new Promise ((resolve, reject) =>{
        setTimeout( () =>{

            resolve('Congratulations! You have got the certificate')

        },1000)
    });

    return promise;
}




async function course(){

    try{
        await endroll();
        await exam();
        let message = await getCertificate();
        console.log(message);

    }

    catch(error){

        console.log(error);

    }
}


course();

