const array = new Array(1,2,3,4,5,6)
// or
const array2 = [11,24,3,42]
//console.log(array2)

// TODO: Accessing the elements of the array

//console.log(array2[1])

// TODO: Adding elements to the array
array.push(6)
//console.log(array)

// TODO: Removing elements from the array
array.pop()
//console.log(array)

// TODO: Concatenating arrays
const array3 = [9,6,2,8]
const array4 = array2.concat(array3)
//console.log(array4)

// TODO: Checking if an array contains a specific element
//console.log(array2.includes(3))

// TODO: Sorting an array
array4.sort((a, b) => a - b)
// console.log(array4)

// TODO: Finding the index of an element in an array
//console.log(array4.indexOf(42))

// TODO: unshift the elements in the array // adding element at index 0
array4.unshift(1)
//console.log(array4)

// TODO: shift the elements in the array // removing element at index 0
array4.shift()
//console.log(array4)

//TODO: converting the array into a string
const strArray = array4.join()
// console.log(strArray)
// console.log(typeof strArray)

// FIXME: slice and splice in the array
console.log("A" , array)
const newAr = array.slice(1,3)
// console.log(newAr)
// console.log("A" , array)
// FIXME: splice in the array
const newAr2 = array.splice(1,3)
// console.log(newAr2)
// console.log("B" , array)