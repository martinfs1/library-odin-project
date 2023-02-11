console.log('Hello Library!');

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

function addBookToLibrary(book) {
  myLibrary.push(book);
}
const orgasmicMan = new Book('El hombre multiorgasmico', 'Mantak Chia', '268', 'no read');
const twelveRulesToLive = new Book('12 Reglas para vivir', 'Jordan B. Peterson', '600', 'no read');
const autobiographyOfYogui = new Book('Autobiografia de un yogui', 'Paramahansa Yogananda', '289', 'read');

addBookToLibrary(orgasmicMan);
addBookToLibrary(twelveRulesToLive);
addBookToLibrary(autobiographyOfYogui);

console.log(myLibrary);
