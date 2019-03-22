class Library {
  constructor(books) {
    this.books = books;
  }

  add(newBook) {
    this.books.push(newBook);
  }

  remove(newBook) {
    this.books.pop(newBook);
  }

  checkout(library) {
  // I don't know what to use within function - library not correct
  this.books.shift(library(Math.floor(Math.random() * Library.length)));
  // how to I save this result to be able to check this book back in again? 
  // Should I use a map?
}

  checkin(library) {
  // I don't know what to use within function - library not correct
  this.books.push(library);
  // I want to link this with the saved result above to ensure that book
  // is the same book checked back in.
}
  
  notavailable(newBook) {
     // I don't know what to use within function - newBook is not correct
     if (this.books(newBook.available = false) ) {
       console.log("Sorry this book is not available at the moment");
     }
     // not a complete function
  }

   available(library) {
       // I don't know what to use within function - library not correct
      if (this.books(newBook.available = true)) {
        console.log() 
        // how do I select the books that are true?
      }
   }

}

module.exports = Library;
