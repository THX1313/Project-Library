// The Book constructor
function Book (author, title, numberOfPages, beenRead) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.beenRead = beenRead;
}
   
// Create an empty array to store books
const myLibrary = [];

// Add a method to the Book prototype that toggles the beenRead property
Book.prototype.readToggle = function() {
  this.beenRead = !this.beenRead;
};

// Get the bookCards element
const bookCards = document.querySelector('.bookCards');

// Create "NEW BOOK" button that runs displayForm when clicked
const newBookButton = document.createElement('button');
newBookButton.textContent = "NEW BOOK";
newBookButton.addEventListener('click', toggleFormDisplay);

// Get the form element
const myForm = document.getElementById("myForm")
    
  myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const bookAuthor = document.querySelector("#author").value.trim(); // trim() removes whitespace from the beginning and end of string.
  const bookTitle = document.querySelector("#title").value.trim();
  const bookNumberOfPages = document.querySelector("#numberOfPages").value.trim();
  const bookBeenRead = document.querySelector("#beenRead").value.trim();
  
  const beenRead = bookBeenRead === "yes";
    
  myLibrary.push(new Book(bookAuthor, bookTitle, bookNumberOfPages, beenRead));
  
  // Clear input field by setting its value to an empty string
  document.getElementById("author").value = '';
  document.getElementById("title").value = '';
  document.getElementById("numberOfPages").value = '';
  document.getElementById("beenRead").value = '';
    
  toggleFormDisplay();
    
  // Display the books in the library
  displayBooks();
  });

  function toggleFormDisplay() {
  let x = document.querySelector('form');
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}

// Function to display the books in the library
function displayBooks() {
  // Remove all of the bookCards' child nodes except the newBookButton
  bookCards.innerHTML = '';
  bookCards.appendChild(newBookButton);

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

  displayBooks();
