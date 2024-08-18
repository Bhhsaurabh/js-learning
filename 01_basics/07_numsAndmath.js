const number  = 400;
//console.log(number)
const newNumber = new Number(100)
////console.log(newNumber.toString())
//console.log(typeof newNumber)
let num1 = 100.6123

//console.log(num1.toFixed(2))
//console.log(num1.toPrecision(4))

const number2 = 1000000
// console.log(number2.toLocaleString())

// +++++++++++++++++++++ +++++++++ Math functions  ++++++++++++ ++++++++++++

// console.log(Math.round(4.6))
// console.log(Math.PI)
// console.log(Math.ceil(4.5))
// console.log(Math.floor(4.9))
// console.log(Math.abs(-4))
// console.log(Math.pow(10,2))
// console.log(Math.sqrt(25))
// console.log(Math.max(1,25,23,1323,345))
// console.log(Math.min(332,24,32,435,22,45))


// Math.random always generates a random number between 0 and 1
console.log(Math.random())

// generate random number between 1 to 6
console.log(Math.floor(Math.random()*6)+1)
//or
// const min = 1
// const max = 6
// Math.floor(Math.random() * (total number in range + 1 ) + min);
// console.log(Math.floor(Math.random()* (max- min) + 1 ) + min)
// TODO: generate a random number between 20 to 30
console.log(Math.floor(Math.random() * 10 + 1) + 20)