/**
 * Task
 * In your copy of the repository, create a file named “javascript/print-top-books.js”.
 *  In it write a module which exposes a function to find the top three books with the 
 * highest ratings, and returns the contents of these books as an array of strings.
 *  This module should expose ONLY one public function.

  
 
 */

import books from './books';

let topThree = () =>{

let topThree = books.sort((a,b)=>{return (b.ratings - a.ratings);}).slice(0,3);
let topThreeArray=[];

topThree.map((book) =>{

topThreeArray.push( "book: " + book.title + ", author: " + book.author + ", category:  " + book.category + ", ratings: " + book.ratings)


});
/* print the array */
//console.log(topThreeArray);

return(topThreeArray);



};

export default  topThree;

/**
 * To use module: import topThree and call topThree()
 */

