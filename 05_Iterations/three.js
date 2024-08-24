// for of 
const arr = [1,2,3,4,5,60]
for(const i of arr){
    // console.log(i) 
}
const greeting = "Hello world!"
for(const greet of greeting){
    // console.log(greet)
    
}
// maps 
const map = new Map()
map.set("In","INdia")
map.set("Us","United state")
map.set("Uk","United Kingdom")

// console.log(map) 
//TODO: maps are iteratable
for(const [key,value] of map){
    // console.log(`${key} :-> ${value}`)
}
//TODO: objects are nto iterable
const obj = {
    name : "saurabh",
    age : 19
}
for(const [key , value] of obj){
    console.log(`${key}:-> ${value}`)
}