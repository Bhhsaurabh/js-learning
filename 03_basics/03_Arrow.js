const user = {
    username:"Saurabh",
    price : 999,
    welcomeMessage : function(){ // this keyword is referred to the current username
        console.log(`${this.username} , Welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user["username"] = "golu"
// user.welcomeMessage()
// console.log(this)

function testingThis(){
    const username = "saurabh"
    console.log(this.username) // this is not referring to username in functions yet // in objects it do
}
// testingThis()

//normal function
const sumTwo = function(num1 , num2){
    return num1 + num2
}
// arrow explicit function
const sumTwoNum = (num1, num2) => {
    return num1 + num2
}
// arrow implicit function
const sumTwoNum2 = (num1 , num2) => (num1 + num2)

// return object using arrow implicit function

const printObj = () => ({name: "shaktiman"})
console.log(printObj()) // print object