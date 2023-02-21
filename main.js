console.log('Hello Library!');
const $title = document.getElementById('title');
const $nameAth = document.getElementById('ath');
const $pages = document.getElementById('pages');
const $read = document.getElementById('read?');
const $cards = document.getElementById('cards-container');

let card;
let $cardToRemove;
let cardsToShow = [];
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
  cardsToShow.push(book)
  resetInputs();
}

function displayLibrary(array) {
  array.forEach(element => {
    card = `
    <div class="book-card" data-id>
    <h2>Title:${element.title}</h2>
    <p>Author: ${element.author}</p>
    <p>Pages: ${element.pages}</p>
    <p>Read: ${element.read}</p>
    <button class="remove-btn" type="button">Remove</button>
    </div>`;
    $cards.innerHTML += card;
    card = $cards.lastElementChild;
    card.dataset.id = myLibrary.length;
    myLibrary.push(element);
    cardsToShow.shift();
  })
}

function removeBook() {
  let index = $cardToRemove.dataset.id
  myLibrary.splice(index, 1)
  $cardToRemove.remove()
  let cardsToSetNewID = document.querySelectorAll('.book-card')
  cardsToSetNewID.forEach((card, index) => {
    card.dataset.id = index;
  })
}

document.addEventListener('click', (event) => {
  if (event.target.matches('.newBook-btn')) {
    event.preventDefault();
    addBookToLibrary();
    displayLibrary(cardsToShow);
  } else if (event.target.matches('.remove-btn')) {
    $cardToRemove = event.target.parentNode;
    removeBook()
    console.log(myLibrary);
  }
});


