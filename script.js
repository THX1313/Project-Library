const bookCards = document.querySelector('.bookCards');
    

// The constructor...
function Book(author, title, numberOfPages, beenRead) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.beenRead = beenRead;
}

// Create an array to store books
const myLibrary = [];


// Populate the library with some books
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

// Function to loop through the array and display each book on the page.
function displayBooks() {
  // Remove all of the element's child nodes to initialize the display of books to null
  while (bookCards.firstChild) {
    bookCards.removeChild(bookCards.firstChild);
  }
  // Generate a book card, and add it to the web page, for each book in the library
  generateBookCards();
}

function generateBookCards() {
  // Loop through the array of books
  myLibrary.forEach((book, index) => {
    // create a new div elements
    const bookCard = document.createElement("div");
    const booksNumber = document.createElement("div");
    const booksTitle = document.createElement("div");
    const booksAuthor = document.createElement("div");
    const booksNumberOfPages = document.createElement("div");
    const booksBeenRead = document.createElement("div");

    // Create content
    const booksNumberContent = document.createTextNode(`Book: ${index + 1}`);
    const booksTitleContent = document.createTextNode(`Title: ${book.title}`);
    const booksAuthorContent = document.createTextNode(`Author: ${book.author}`);
    const booksNumberOfPagesContent = document.createTextNode(`Number of Pages: ${book.numberOfPages}`);
    const booksBeenReadContent = document.createTextNode(`Been Read: ${book.beenRead ? "Yes" : "No"}`);

    // Add the text node to the newly created div, bookCard.
    booksNumber.appendChild(booksNumberContent);
    booksTitle.appendChild(booksTitleContent);
    booksAuthor.appendChild(booksAuthorContent);
    booksNumberOfPages.appendChild(booksNumberOfPagesContent);
    booksBeenRead.appendChild(booksBeenReadContent);

    // Add bookCard children to bookCard
    bookCard.appendChild(booksNumber);
    bookCard.appendChild(booksTitle);
    bookCard.appendChild(booksAuthor);
    bookCard.appendChild(booksNumberOfPages);
    bookCard.appendChild(booksBeenRead);

    // Assign bookCard class to new bookCards
    bookCard.classList.add('bookCard');

    // Add book card to the DOM, bookCards.
    bookCards.appendChild(bookCard);
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