
function Book(author, name, year, listNumbers){
    this.author = author;
    this.name = name;
    this.year = year;
    this.listNumbers = listNumbers;   
  
} 

let book1 =new Book('John', 'ddd', 1600, 1936);
let book2 =new Book('Vladimir', 'rrrr', 1200, 1255);
let book3 =new Book('Alexej', 'ffff', 0900, 2543);
let books = [book1, book2, book3];

const sortedBooksByAuthor = books.sort((a, b) =>{    
    if (a.author < b.author)    
      return -1
    if (a.author > b.author)
      return 1
    if (a.author == b.author){       
            if (a.listNumbers < b.listNumbers)
                return -1
            if (a.listNumbers > b.listNumbers)
                return 1  
        } 
    });
console.log('sortedBooksByAuthor');
console.log(sortedBooksByAuthor);

let reqAuth = "John";
const findAuthor = books.find(item => {
    item.author === reqAuth;
})
console.log(findAuthor);
books.push(new Book('Nick', 'rrrr', 2500, 3651));
console.log(books);


let reqYear = 0900;
const findYear = books.find(item => {
    delete item.year === reqYear;
})
console.log(books);










