console.log('Hello Library!');
const $title = document.getElementById('title');
const $nameAth = document.getElementById('ath');
const $pages = document.getElementById('pages');
const $read = document.getElementById('read?');
const $cards = document.getElementById('cards-container');

let card;
let $readStatusTochange;
let $cardToTarget;
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
    <p id='read'>Read: ${element.read}</p>
    <button class="toggle-btn" type="button">Read? Yes/No </button>    
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

function toggleReadStatus() {
  let index = $readStatusTochange.dataset.id;
  let $pRead = $readStatusTochange.querySelector('#read')
  if (myLibrary[index].read === 'si') {
    myLibrary[index].read = 'no'
    $pRead.textContent = `Read: ${myLibrary[index].read}`
  } else {
    myLibrary[index].read = 'si'
    $pRead.textContent = `Read: ${myLibrary[index].read}`
  }
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
  } else if (event.target.closest('.toggle-btn')) {
    $readStatusTochange = event.target.parentNode;
    toggleReadStatus()
  }

});


