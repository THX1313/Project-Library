    // the constructor...
function Book(author, title, numberOfPages, beenRead) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.beenRead = beenRead;
}

// Create an array to store books
const myLibrary = [];


// Prepopulate the library with some books
myLibrary.push(new Book("Andy Wier", "The Martian", 387, true));
myLibrary.push(new Book("Max Brooks", "World War Z", 487, false));
myLibrary.push(new Book("George Orwell", "1984", 328, true));


// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. How you decide to display this form is up to you. For example, you may wish to have a form show in a sidebar or you may wish to explore dialogs and modals using the <dialog> tag. However you do this, you will most likely encounter an issue where submitting your form will not do what you expect it to do. That’s because the submit input tries to send the data to a server by default. If you’ve done the bonus section for the calculator assignment, you might be familiar with event.preventDefault();. Read up on the event.preventDefault documentation again and see how you can solve this issue!

// Function to add a new book to the library array
function addBookToLibrary() {
  const bookTitle = prompt("Enter a book title: ");
  const bookAuthor = prompt("Enter the book's author: ");
  const bookNumberOfPages = parseInt(prompt("Enter the book's number of pages: "));
  const bookBeenRead = prompt("Have you read the book? (yes or no)").toLowerCase();

  const beenRead = bookBeenRead === "yes";
  myLibrary.push(new Book(bookAuthor, bookTitle, bookNumberOfPages, beenRead));
}

// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.
//
// Function to display books in the library
function displayBooks() {
  myLibrary.forEach((book, index) => {
    console.log(`Book ${index + 1}:
    Title: ${book.title}
    Author: ${book.author}
    Number of Pages: ${book.numberOfPages}
    Been Read: ${book.beenRead ? "Yes" : "No"}`);
  });
}
// Add a button on each book’s display to remove the book from the library.
// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

// Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.
// NOTE: You’re not required to add any type of storage right now. You will have the option to come back to this project later on in the course.


// Interaction with the user to add a new book
addBookToLibrary();

// Display the books
displayBooks();







// myLibrary.push(new Book('Andy Wier', 'The Martian', 387, 'true'));
// myLibrary.push(new Book('Max Brooks', 'World War Z', 487, 'false'));
// myLibrary.push(new Book('1984', 'George Orwell', 328, 'true'));

// getBookData();



// myLibrary.forEach((book) => {
//   console.log(book);
// });

// function addBookToLibrary() {
//     // do stuff here
//   }

