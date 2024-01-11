const myLibrary = [];
const plusBtn = document.getElementById('plusBtn');
const form = document.getElementById('form');

plusBtn.addEventListener('click', function () {
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('submitBtn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    getUserInput(createBook);
});

// get user input from 
function getUserInput(callback) {
    // Get user data from html
    let title = document.getElementById('titleOfBook').value;
    let author = document.getElementById('authorOfBook').value;
    let pages = document.getElementById('numberOfPages').value;
    let year = document.getElementById('year').value;

    // Use an object to store the values
    let userData = {
        title: title,
        author: author,
        pages: pages,
        year: year
    };

    // Call the callback with the user data
    if (callback) {
        callback(userData);
    }

    // Reset the form after submission
    form.reset();
}

// function to create book from user input
function Book(title, author, pages, year) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.hasRead = false;

    this.markAsRead = () => {
        this.hasRead = true;
    };
    this.markAsUnread = () => {
        this.hasRead = false;
    };
}

function createBook(userData) {
    console.log(userData);
    let newBook = new Book(userData.title, userData.author, userData.pages, userData.year);
    updateContent(newBook);
    // Add the new book to the library
    addBookToLibrary(newBook);
}

// update web content
function updateContent(newBook) {
    const books = document.getElementById('books');
    // Create a new div for each book
    const bookContainer = document.createElement("div");
    bookContainer.classList.add('book-container'); // Optionally add a class to style the container

    const bookHeading = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookYear = document.createElement("p");
    const bookPages = document.createElement("p");

    bookHeading.innerHTML = `Book Title: ${newBook.title}`;
    bookContainer.appendChild(bookHeading);

    bookAuthor.innerHTML = `Author: ${newBook.author}`;
    bookContainer.appendChild(bookAuthor);

    bookYear.innerHTML = `Year of Release: ${newBook.year}`;
    bookContainer.append(bookYear);

    bookPages.innerHTML = `Number of Pages: ${newBook.pages}`;
    bookContainer.appendChild(bookPages);

    // Append the book container to the main books container
    books.appendChild(bookContainer);
}

// add books to library
function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary);
    // You can perform additional actions here if needed
}
