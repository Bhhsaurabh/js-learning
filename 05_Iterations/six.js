const books = 
     [
      {
        "id": 1,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "genre": "Fiction",
        "published_year": 1960,
        "rating": 4.8,
        "available": true,
        "price" : 399
      },
      {
        "id": 2,
        "title": "1984",
        "author": "George Orwell",
        "genre": "Dystopian",
        "published_year": 1949,
        "rating": 4.7,
        "available": false,
        "price" : 499
      },
      {
        "id": 3,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": "Fiction",
        "published_year": 1925,
        "rating": 4.4,
        "available": true,
        "price":199
      },
      {
        "pub":"rejndra",
        "id": 4,
        "title": "Moby Dick",
        "author": "Herman Melville",
        "genre": "Adventure",
        "published_year": 1851,
        "rating": 4.1,
        "available": true,
        "price":299
      },
      {
        "pub" : "rejndra",
        "id": 5,
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "genre": "Romance",
        "published_year": 1813,
        "rating": 4.6,
        "available": false,
        "price":599
      }
    ]
 
 let bookDetails =  books.filter((bk)=> (bk.pub == "rejndra"))
bookDetails =  books.filter((bk)=> (bk))
 bookDetails = books.filter((bk)=> {return bk.available})

// console.log(bookDetails)

// using .map function
const num = [1,2,3,4,5,6]
// add +10 in each number using .map function
const newNum  = num.map((n) => (n + 10))
// console.log(newNum)

//TODO: maps filter chaning

const newNum2 = num
                    .map((n) => n*10)
                    .map((n) => n + 1)
                    .filter((n) => n>48)
// console.log(newNum2)


//TODO: use reduce to calculate or add something

const totalPrice = books.reduce((acc,item)=>(acc + item.price),0)
console.log(totalPrice)