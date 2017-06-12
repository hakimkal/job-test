/* 

Write a function which accepts an author and returns books by that
 author in a file name “javascript/fetch-books-by-authors.js”
Push both codes to your copy of the repository

*/

import books from "./books";

/* Pass the author name to arg  object key 'author' */

let arg = { author: "George Orwell" };

//Callback 

let isBookAuthor = book => {
  if (book.author == arg.author) {
    return true;
  }

  return false;
};


let getBooksByAuthor = () => {
  return books.filter(isBookAuthor, arg);
};


//console.log(getBooksByAuthor());
