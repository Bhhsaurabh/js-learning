const tinderUser = new Object() // declare object or
// const tinderUser = {}

// console.log(tinderUser)\
const mySymbol = Symbol("Key1") 

tinderUser.name = "saurabh"
tinderUser.age = 19
tinderUser.FullName = {
    [mySymbol] : "key1Value",
    username : {        //TODO: you can make nested objects
        firstName : "Saurabh",
        secondName: "Kumar"
    }
}
tinderUser["name"] = "golu"
// console.log(tinderUser)
// console.log(tinderUser.FullName[mySymbol])

// TODO: merge two objects 
const user1 = {
    name : "saurabh",
    age : 19
}
const user2 = {
    city : "sasaram",
    road: "gt road"
}
const userDetails = {...user1 , ...user2} // or 
//const userDetails = Object.assign({}, user1, user2) // note that 
// both user1 and user2 should not have the same key names
// console.log(userDetails)

const users =[
    {
    id: 1,
    email: "saurabh@gmail.com"
    },

    {
        id:2,
        email: "golu@gmail.com"

    },

    {
        id:3,
        email: "sonu@gmail.com"
    }
]

// console.log(users[0].email)

// TODO: find all keys in the object
// find all values in the object
// console.log(Object.keys(tinderUser)) 
// console.log(Object.values(tinderUser))

//TODO: to get key values in form of arrays
// console.log(Object.entries(tinderUser))

// TODO: check whether object have certain properties
// console.log(tinderUser.hasOwnProperty('name'))


//TODO:  Destructuring the object with destruct functions
const {FullName: fn} = tinderUser
console.log(fn)