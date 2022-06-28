const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBtn = document.querySelector('.add-input');
const listBtn = document.querySelector('.list-btn');
const bookAddBtn = document.querySelector('.add-btn');
const contactBtn = document.querySelector('.contact-btn');
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
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', (e) => {
      Book.remove(e);
    });
    book.appendChild(removeBtn);
    document.querySelector('.books-container').appendChild(book);
  }

  static remove(e) {
    bookArr = bookArr.filter((each) => e.target.parentElement.id !== each.id);
    localStorage.setItem('books', JSON.stringify(bookArr));
    e.target.parentElement.remove();
  }
}

addBtn.addEventListener('click', () => {
  if (titleInput.value && authorInput.value) {
  /* eslint-disable */
  const bookItem = new Book(authorInput.value + bookArr.length, '\"' + titleInput.value + '\"', ' by ' + authorInput.value);
  /* eslint-enable */
    bookItem.add();
    bookArr.push(bookItem);
    localStorage.setItem('books', JSON.stringify(bookArr));
  }
});

if ('books' in localStorage) {
  bookArr = JSON.parse(localStorage.books);
  bookArr.forEach((each) => {
    const newData = new Book(each.id, each.title, each.author);
    newData.add();
  });
}

listBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.books').style.display = 'block';
  document.querySelector('.add-book').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
});

bookAddBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.add-book').style.display = 'block';
  document.querySelector('.books').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
});

contactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.contact').style.display = 'flex';
  document.querySelector('.books').style.display = 'none';
  document.querySelector('.add-book').style.display = 'none';
});

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

const today = new Date();
const date = `${monthNames[today.getMonth()]} ${today.getDate()} ${today.getFullYear()}`;
const time = `${today.getHours()}:${today.getMinutes()}`;
document.querySelector('.time').textContent = `${date} ${time}`;