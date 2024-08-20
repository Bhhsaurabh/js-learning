// spread operations to concatenate multiple arrays
const marvelHeroes = ["ironman","spiderman","thor"]
const dcHeroes = ["batman","flash","superman"]

const allHeroes = [...marvelHeroes,...dcHeroes] // spread means dropping a glasses to the floor

// console.log(allHeroes)
const strHeroes = allHeroes.join();
// console.log(allHeroes.join())
// console.log(typeof strHeroes)


// use flat arrays to make usable single array
const multiArray = [1,2,3 ,[23,4234,23],23,4,236,[1,3,[33,44,55]],7,5]
// console.log(multiArray)
const useableArray = multiArray.flat(Infinity)
// console.log(useableArray)

// check if input is array or not
console.log(Array.isArray("Saurabh"))
// make input as array
console.log(Array.from("Saurabh"))

// make multiple input as array
const score1 = 100
const score2 = 200
const score3 = 400
console.log(Array.of(score1,score2,score3))