const Library = require("../app/library");
const Book = require("../app/books");

test("Check that a library can be instantiated with some books", () => {
  const book1 = new Book ("Fantastic Mr Fox", "Roald Dahl", 789);
  const book2 = new Book ("Site Reliability Engineering", "Niall Murphy", 456);
  const book3 = new Book ("Don't Make Me Think", "Steve Krug", 123);
  const library = new Library([book1, book2, book3]
  );
  expect(library.books).toEqual([book1, book2, book3]
  );
});

test("Check that a book can be added to the library", () => {
  const book1 = new Book ("Fantastic Mr Fox", "Roald Dahl", 789);
  const book2 = new Book ("Site Reliability Engineering", "Niall Murphy", 456);
  const book3 = new Book ("Don't Make Me Think", "Steve Krug", 123);
  const book4 = new Book ("Growth Mindset", "Carol Dweck", 992);
  const library = new Library([book1, book2, book3]);

  library.add(book4);
  expect(library.books).toEqual([book1, book2, book3, book4]);
});


test("Check that a book can be removed from the library", () => {
  const book1 = new Book ("Fantastic Mr Fox", "Roald Dahl", 789);
  const book2 = new Book ("Site Reliability Engineering", "Niall Murphy", 456);
  const book3 = new Book ("Don't Make Me Think", "Steve Krug", 123);
  const book4 = new Book ("Growth Mindset", "Carol Dweck", 992);
  const library = new Library([book1, book2, book3, book4]);

  library.remove(book4);
  expect(library.books).toEqual([book1, book2, book3]);
});
  // how do we know this test actually works if we can't console log it?

test("Check that a book can be checked out from the library", () => {
  const book1 = new Book ("Fantastic Mr Fox", "Roald Dahl", 789);
  const book2 = new Book ("Site Reliability Engineering", "Niall Murphy", 456);
  const book3 = new Book ("Don't Make Me Think", "Steve Krug", 123);
  const book4 = new Book ("Growth Mindset", "Carol Dweck", 992);
  const library = new Library([book1, book2, book3, book4]);

  library.checkout(library);
  // I don't know what to use in this function but I know library is wrong
  expect(library.books).toEqual([book1, book2, book3]);
});

test("Check that a book can be checked back in to the library", () => {
  const book1 = new Book ("Fantastic Mr Fox", "Roald Dahl", 789);
  const book2 = new Book ("Site Reliability Engineering", "Niall Murphy", 456);
  const book3 = new Book ("Don't Make Me Think", "Steve Krug", 123);
  const book4 = new Book ("Growth Mindset", "Carol Dweck", 992);
  const library = new Library([book1, book2, book3, book4]);

  library.checkin(library);
    // I don't know what to use in this function but I know library is wrong
  expect(library.books).toEqual([book1, book2, book3, book4]);
});

test("Check that cannot check out an alrea)dy borrowed book", () => {
  const book1 = new Book (true);
  const book2 = new Book (false);
  const book3 = new Book (true);
  const book4 = new Book (true);
  const library = new Library([book1, book2, book3, book4]);

  library.notavailable(newBook);
    // I don't know what to use in this function but I know newBook is wrong
  expect(library.books).toBe('Sorry this book is not available at the moment');
});

test("Get a list of all available books in the library", () => {
  const book1 = new Book (true);
  const book2 = new Book (false);
  const book3 = new Book (true);
  const book4 = new Book (true);
  const library = new Library([book1, book2, book3, book4]);

  library.available(library);
    // I don't know what to use in this function but I know library is wrong
  expect(library.books).toBe(true);
});