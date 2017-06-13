import books from "./books";

const filterBooksWithTitleStartingWithA = (sortedBooks, callback) => {
  let filteredBooks;
  /* filter logic here */

  return new Promise((resolve, reject) => {
    try {
      callback(filteredBooks);
    } catch (e) {
      reject(e);
    }
  });
};

const sortBooksAlphabetically = (books, callback) => {
  let sortedBooks;
  /* sorting logic books */

  return new Promise((resolve, reject) => {
    try {
      callback(sortedBooks);
    } catch (e) {
      reject(e);
    }
  });
};


//load the callback method 
let loadCallback = callback => {
  return new Promise((resolve, reject) => {
    try {
      callback(books, filterBooksWithTitleStartingWithA);
    } catch (e) {
      reject(e);
    }
  });
};

let getBooksAsync = callback => {
  loadCallback(sortBooksAlphabetically);
};
/*
delay promise
*/
let delay = interval => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(resolve, interval);
    } catch (e) {
      reject(e);
    }
  });
};


delay(2000).then(getBooksAsync);
