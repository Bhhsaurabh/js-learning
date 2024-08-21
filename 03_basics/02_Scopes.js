var c = 30
if(true){
    let a = 20
    const b = 30

    var c = 10
}
// here you can not access a,b as it is block scope
// console.log(a)
// console.log(b)
// still you can access c as var is global scope // that is problematic
// the value of c is changed as it wont change if you declare using let
// console.log(c)

function one(){
    const username = "saurabh"
    function two(){
        const webName = "youtube"
        console.log(username)
    }
    //console.log(webName) you can not access webName as webname is out of scope
    two()
}
// one()

// declare function with different methods
console.log(firstMeth(6)) // using function before declaration
function firstMeth(num){
    return num + 1
}
// 2nd method

//console.log(secondMeth(9)) // with this method you can not access function before declaration
const secondMeth = function(num){
    return num + 2
}
console.log(secondMeth(6)) 