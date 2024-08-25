// use for in loops in objects
const user = {
    name:"saurabh",
    loc:"punjab"
}
for(const key in user){
   // console.log(`key is ${key} value is ${user[key]}`)
}

// TODO:for each loop for array
const arr = [1,23,534,543,211,3]
arr.forEach(function (val){
    // console.log(val)
})
//or using arrow function
arr.forEach((val)=>{
    // console.log(val)
})
// or using function
function printMe(item){
    // console.log(item)
}
arr.forEach(printMe)

// for each function have access to val,index and complete array
arr.forEach((val,index,arr)=>{
    //console.log(val,index,arr)
})

// for each loop in [{}]
const data = [
    {   
        name:"saurabh",
        age:15
    },
    {
        name:"mukesh",
        age:13
    }
]

data.forEach((item)=>{
   // console.log(item.name)
})