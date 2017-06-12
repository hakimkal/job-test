/*
Task:
Write a function which accepts a collection of books and orders the books by 
ratings; Highest ratings first, lowest ratings last in a file named “javascript/order-books-by-ratings.js”


 */

import books from './books';


let orderBooksByRatings = books =>{
   
  /* Sort array by  ratings */ 

return(books.sort((a,b)=>{return (b.ratings - a.ratings);}));


};   

//orderBooksByRatings(books);

import topThree from './print-top-books';
console.log(topThree());