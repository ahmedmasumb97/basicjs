let lettrs  = new Set(['a', 'b', 'c'])

let n = new Set()
n.add('a');
n.add('b');
n.add('c');
console.log(n)

let values = n.values()
for(let x of values){
    console.log(x)
}

// set has no key
for(let [x,y] of n.entries()){
    console.log(x,y) //value value pair
}



let mapValue = new Map([
    ["apple",500],
    ["Banana",300],
    ["orange",400],
    ["grape",200]
])

for(let [value,key] of mapValue.entries()) {
    console.log(value,key) // value key pair
}

mapValue.forEach(function(value,key,map) {

    console.log(key,value,map) // value
})

console.log(mapValue.get('apple')) // get value by key


// JavaScript Object.fromEntries()
// The fromEntries() method creates an object from a list of key/value pairs.

listvalue = [
    ["apple",500],
    ["banana",300],
    ["orange",400],
    ["grape",200]
]

const myobj = Object.fromEntries(listvalue)
console.log(myobj)