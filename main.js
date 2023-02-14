console.log('Hello Library!');
const $title = document.getElementById('title');
const $nameAth = document.getElementById('ath');
const $pages = document.getElementById('pages');
const $read = document.getElementById('read?');
const $cards = document.getElementById('cards-container');

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // eslint-disable-next-line func-names
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read} yet`;
  };
}

function resetInputs() {
  $title.value = '';
  $nameAth.value = '';
  $pages.value = '';
  $read.value = '';
}

function addBookToLibrary() {
  const title = $title.value;
  const nameAth = $nameAth.value;
  const pages = $pages.value;
  const read = $read.value;
  const book = new Book(title, nameAth, pages, read);
  myLibrary.push(book);
  resetInputs();
}

function displayLibrary(array) {
  array.forEach((element) => {
    console.log(myLibrary);
    const card = `
      <div class="card">
        <h2>Title:${element.title}</h2>
        <p>Author: ${element.author}</p>
        <p>Pages: ${element.pages}</p>
        <p>Read: ${element.read}</p>
      </div>`;
    $cards.innerHTML += card;
  });
}

document.addEventListener('submit', (event) => {
  event.preventDefault();
  addBookToLibrary();
  displayLibrary(myLibrary);
});
