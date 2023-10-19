// The Book constructor
function Book (author, title, numberOfPages, beenRead) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.beenRead = beenRead;
}
  
// Add a method to the Book prototype that toggles the beenRead property
Book.prototype.readToggle = function() {
  this.beenRead = !this.beenRead;
};

  // Get the bookCards element
const bookCards = document.querySelector('.bookCards');
  
// Create an empty array to store books
const myLibrary = [];

// Function to add a new book to the library array
function addBookToLibrary() {
  const bookTitle = prompt("Enter a book title: ");
  const bookAuthor = prompt("Enter the book's author: ");
  const bookNumberOfPages = parseInt(prompt("Enter the book's number of pages: "));
  const bookBeenRead = prompt("Have you read the book? (yes or no)").toLowerCase();
  const beenRead = bookBeenRead === "yes";

  myLibrary.push(new Book(bookAuthor, bookTitle, bookNumberOfPages, beenRead));
  
  // Display the books in the library
  displayBooks(); 
  }

// Function to display the books in the library
function displayBooks() {
  // Remove all of the element's child nodes
  bookCards.innerHTML = '';

  // Generate a book card for each book in the library
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');

    const bookNumber = document.createElement('div');
    bookNumber.textContent = `Book: ${index + 1}`;

    const bookTitle = document.createElement('div');
    bookTitle.textContent = `Title: ${book.title}`;

    const bookAuthor = document.createElement('div');
    bookAuthor.textContent = `Author: ${book.author}`;

    const bookNumberOfPages = document.createElement('div');
    bookNumberOfPages.textContent = `Number of Pages: ${book.numberOfPages}`;

    const bookBeenRead = document.createElement('div');
    bookBeenRead.textContent = `Been Read: ${book.beenRead ? "Yes" : "No"}`;
    
    // "Toggle Read" button that runs when clicked
    const toggleReadButton = document.createElement('button');
    toggleReadButton.textContent = "Toggle Read Status";
    toggleReadButton.addEventListener('click', toggleRead);

    // "Remove Book" button that runs when clicked
    const removeBookButton = document.createElement('button');
    removeBookButton.textContent = "REMOVE BOOK";
    removeBookButton.addEventListener('click', removeBook);


    bookCard.appendChild(bookNumber);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookNumberOfPages);
    bookCard.appendChild(bookBeenRead);
    bookCard.appendChild(toggleReadButton);
    bookCard.appendChild(removeBookButton);

    bookCard.dataset.index = index;

    bookCards.appendChild(bookCard);
  });
}

function toggleRead(e) {
  // Get the book card containing the clicked button
  const thisBookCard = e.target.closest('.bookCard');
    
  const bookCardIndex = parseInt(thisBookCard.dataset.index, 10);

  const book = myLibrary[bookCardIndex];

  book.readToggle();
  
  // Refresh the display after toggling read status
  displayBooks();}

function removeBook(e) {
  // Get the book card containing the clicked button
  const thisBookCard = e.target.closest('.bookCard');
    
  const bookCardIndex = parseInt(thisBookCard.dataset.index, 10);
  
  const book = myLibrary[bookCardIndex];
    
  // Remove object from array
  myLibrary.splice(bookCardIndex, 1);
    
  // Refresh the display after removing book from library
  displayBooks();

}

// "NEW BOOK" button that runs addBookToLibrary when clicked
const newBookButton = document.createElement('button');
newBookButton.textContent = "NEW BOOK";
newBookButton.addEventListener('click', addBookToLibrary);
document.body.appendChild(newBookButton);

// Remaining tasks:
// Modify addBookToLibrary to display a form for user input of book.
// Use a sidebar, or dialogs and modals using the <dialog> tag?
// Remember: event.preventDefault():