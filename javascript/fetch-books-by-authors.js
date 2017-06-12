/* 
Write a function which accepts an author and returns books by that author in a file name
 “javascript/fetch-books-by-authors.js”
Push both codes to your copy of the repository

*/
import books from './books';

let getBooksByAuthor= (author)=>{
let booksByAuthor = [];
books.filter(book=>{
    if(book.author == author){

    
    booksByAuthor.push(book) ;
}

  
});
return booksByAuthor;  
};


 //getBooksByAuthor("George Orwell");

