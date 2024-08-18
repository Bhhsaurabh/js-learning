// * all the primitive data type have stack memory

let myName = "Saurabh"
let myName2 = myName
myName2 = "golu"
console.log(myName)
console.log(myName2)

// original value do not got change


// * all the non primitive data type have heap memory

let perOne = {
    id:1,
    mail : "bhhsaurabh@gamil.com",
    name : "saurabh"
}
let perTwo = perOne
perTwo.mail = "golu@gmail.com"
console.log(perOne.mail);
console.log(perTwo.mail)

// here the original value got changed

