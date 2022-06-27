const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBtn = document.querySelector('.add-input');
let bookArr = [];

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  add() {
  const book = document.createElement('div');
  book.className = 'book';
  book.setAttribute('id', this.id);
  const title = document.createElement('span');
  title.className = 'title';
  title.textContent = this.title;
  book.appendChild(title);
  const author = document.createElement('span');
  author.className = 'author';
  author.textContent = this.author;
  book.appendChild(author);
  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove-btn'
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', (e) => {
    bookArr = bookArr.filter((each) => parseInt(e.target.parentElement.id) !== each.id);
    localStorage.setItem('books', JSON.stringify(bookArr));
    e.target.parentElement.remove();
  });
  book.appendChild(removeBtn);
  const separator = document.createElement('hr');
  book.appendChild(separator);
  document.querySelector('.books-container').appendChild(book);
  }
}

addBtn.addEventListener('click', () => {
  const bookItem = new Book(bookArr.length, titleInput.value, authorInput.value);
  bookItem.add();
  bookArr.push(bookItem);
  localStorage.setItem('books', JSON.stringify(bookArr));
});

if ('books' in localStorage) {
  bookArr = JSON.parse(localStorage.books);
  bookArr.forEach((each) => {
  const newData = new Book(bookArr.length, each.title, each.author);
  newData.add();
  });
}
