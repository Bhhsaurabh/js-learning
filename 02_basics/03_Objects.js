const Symb = Symbol("key1")

const userJs = {
    name: 'Saurabh ',
    "full name" : "Saurabh kumar",
    [Symb]:"key1Value",
    age:19,
    email:"bhhsaruabh@gamil.com",
    islogedIn:false,
    lastlogindays:["Monday","Tuesday","Wednesday"]
}

// to access the element from the object

//1
// console.log(userJs.name)
//2
// console.log(userJs["name"])
// console.log(userJs["full name"])
// console.log(userJs[Symb])
// console.log(userJs["lastlogindays"])

// TODO: change value of an object

userJs["name"] = "golu kumar"
// console.log(userJs)

//TODO: freez the object so no one can change the element value
// Object.freeze(userJs)
userJs["name"] = "Saurabh kumar"
// console.log(userJs)

//TODO: add function to the object // remove freeze function then only it will add to the object
userJs["greeting"] = function(){
    console.log("Hello js user!")
}
//or 
userJs.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`)
}

console.log(userJs.greeting())
console.log(userJs.greetingTwo())
console.log(userJs)