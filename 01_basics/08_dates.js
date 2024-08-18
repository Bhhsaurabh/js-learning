// declare dates
let date = new Date() // it will give current date
// console.log(date)
// console.log(date.toDateString())
// console.log(date.toString())
// console.log(date.toLocaleString())

// create a new date object
let newDate = new Date(2024,7,18)
// console.log(newDate.toDateString())

//TODO: compare dates with different date objects

let myTimeStamp = Date.now()
//console.log(myTimeStamp) // dates are in milliseconds
//console.log(newDate.getTime()) // dates are in milliseconds

// convert milliseconds to seconds

//console.log(Math.floor(Date.now()/1000)) // dates are in seconds

console.log(date.getDay())
console.log(date.getMonth() + 1)

// you can also customize the localString property

console.log(newDate.toLocaleString('default',{weekday:"long"}));