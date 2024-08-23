const name = []
if(name){
    console.log(`hello ${name}`)
}

// falsy values
//false , 0 , "", -0 , null , undefined , BigInt 0n , NaN

//truthy values 
//true , '0' , 1, [] , 'false' , function(){} , {} , " ",

// check whether arrays is empty
if(name.length == 0){
    console.log("Array is empty")
}
// check whether object is empty
const obj = {}
if(Object.keys(obj).length == 0){
    console.log("Object is empty")
}

// nullish coalescing operator (??): null undefined
let a;
// a = 5 ?? 10
// a = null ?? 10 
// a = undefined ?? 10
a = null ?? 10 ?? 15 // first value is assigned
console.log(a)

//TODO: ternary operator

const score = 10
score >= 10 ? console.log("greater") : console.log("smaller") 