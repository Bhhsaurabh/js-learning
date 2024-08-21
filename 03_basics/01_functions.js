function addTwoNumbers(a,b){
    console.log(a+b)
}
// addTwoNumbers(2,4)

//TODO: to return the value from the function

function sumTwoNumbers(a,b){
    let result = a + b
    return result
}
const result = sumTwoNumbers(5,10)
// console.log(result)

function Greeting(username){
    if(!username){
        console.log("Please enter a username")
        return;
    }
    return `Hello ${username}`
}
// console.log(Greeting("Saurabh"))

//TODO: use of rest operator
function manyINput(a,b,...args){
    return args
}
// console.log(manyINput(2,3,35,23,62,22))

//TODO: pass object to the function
function personDetails(person){
    return `person name is ${person.name}`
}
const person = {
    name:"saurabh",
    age: 19
}
// console.log(personDetails(person))

//or

// console.log(personDetails({
//     name:"golu",age:20
// }))
//TODO: pass array to the function
function arrayDetails(arr){
    return arr[1]
}
const arr = [200,300,400,500]
// console.log(arrayDetails(arr))
//or
// console.log(arrayDetails([200,300,400,500]))