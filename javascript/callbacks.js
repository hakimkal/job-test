import books from './books'

const filterBooksWithTitleStartingWithA = (sortedBooks, callback) => {
  let filteredBooks
  /* filter logic here */
  return callback(filteredBooks)
}

const sortBooksAlphabetically = (books, callback) => {
  let sortedBooks
  /* sorting logic books */
  return callback(sortedBooks)
}

/*
const getBooksAsync = (callback) => {
  setTimeout((books) => {
    callback(books, filterBooksWithTitleStartingWithA)
  }, 2000)
}

getBooksAsync(sortBooksAlphabetically)
*/


/* Javascript Promise  */
let delay= (interval)=>{
  return new Promise((resolve,reject)=>{
try {
        setTimeout(resolve, interval);
    }
    catch (e) {
        reject(e);
    }

  });
};

/* Implementation of the getBookAsync func using promise */

const getBookAsync  = delay(2000).then((callback)=>{
  return  callback(books, filterBooksWithTitleStartingWithA);
},
(error)=>{
return "An error occurred " + e;
}
);

getBooksAsync(sortBooksAlphabetically);

