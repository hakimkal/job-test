/**
 * Task
 * In your copy of the repository, create a file named “javascript/print-top-books.js”.
 *  In it write a module which exposes a function to find the top three books with the 
 * highest ratings, and returns the contents of these books as an array of strings.
 *  This module should expose ONLY one public function.

  
 
 */

import books from "./books";
/* format the content function  */

let getContent = book => {
  return (
    "book: " +
    book.title +
    ", author: " +
    book.author +
    ", category:  " +
    book.category +
    ", ratings: " +
    book.ratings
  );
};

/* compare ratings function  */

let compareRatings= (a,b)=>{
  return b.ratings - a.ratings;
     
};

/* get top three books from collection */
let topThree = () => {
  let topThree = books
    .sort(compareRatings).slice(0, 3);

  return topThree.map(getContent);
};

export default topThree;

/**
 * To use module: import topThree and call topThree()
 */
