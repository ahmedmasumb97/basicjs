
let itetorObj = {
    'name': 'mohmmd masum',
    'age': 27,
    'city': 'Dhaka'
}


let itetorArray = [2,3,4]

// console.dir(itetorObj)
// console.dir(itetorArray[Symbol.iterator]())

let numItetor = itetorArray[Symbol.iterator]()
console.log(numItetor.next())
console.log(numItetor.next())
console.log(numItetor.next())
console.log(numItetor.next())

for(let i = 0; i < itetorArray.length;i++) {
    console.log(itetorArray[i])
    
}



// itetator

// let myItetor = {}
// myItetor[Symbol.iterator]= function(){

//     let n1 = 0 ;
//     let done = false ;

//     return{

//         next(){
//             n1 ++;
//             if(n1 == 10){done = true}
//             console.log('this')
//             return {
//                 value:n1,
//                 done: done
//             }
//             console.log('done')
//         }
//     }
// }


// for(let num of myItetor){
//     console.log(num)
// }
