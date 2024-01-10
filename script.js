const myLibrary = [];

document.getElementById('form').addEventListener('click',function(event){
    event.preventDefault();

    title = document.getElementById('titleOfBook').value;
    author = document.getElementById('authorOfBook').value;
    pages = document.getElementById('numberOfPages').value;
    year = document.getElementById('year').value;

    newBook = new Book(title, author,pages,year)
    updateContent();
})

function Book(title, author,pages,year) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.hasRead = false;

    this.markAsRead = ()=>{
        this.hasRead = true;
    }
    this.markAsUnread = ()=>{
        this.hasRead = false;
    }
}

function updateContent() {
    // Use 'const' or 'let' to declare variables
    const updatedTitle = document.getElementsByClassName('title')[0];
    
    // Check if the element with the class 'books' exists before trying to update its content
    if (updatedTitle) {
        updatedTitle.innerHTML = `Title ${this.title}`;
    } else {
        console.error("Element with class 'books' not found");
    }
}


function addBookToLibrary() {
  // do stuff here


}