let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleReadBtn(index) {
  myLibrary[index].toggleRead();
  render();
}

function render() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.setAttribute("class", "book-card");
    bookEl.innerHTML = `
    <h2 class="book-title">"${book.title}"</h2>
    <h3 class="book-author">by ${book.author}</h3>
    <p class="book-pages">${book.pages} pages</p>
    <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
    <button class="remove-btn" onClick="removeBook(${i})">Remove</button>
    <button class="toggle-read-btn" onClick="toggleReadBtn(${i})">Toggle Read</button></div>
    `;
    libraryEl.appendChild(bookEl);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
  render();
}

let newBookBtn = document.querySelector("#new-book-btn");
let newBookForm = document.querySelector("#new-book-form");
newBookBtn.addEventListener("click", function () {
  // let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
});

document
  .querySelector("#new-book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
    resetForm();
    newBookForm.style.display = "none";
  });

function resetForm() {
  newBookForm.reset();
}
