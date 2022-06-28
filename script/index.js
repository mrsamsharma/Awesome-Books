const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBtn = document.querySelector('.add-input');
let bookArr = [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  add() {
    const book = document.createElement('div');
    book.className = 'book';
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
      bookArr.splice(this.index, 1);
      localStorage.setItem('books', JSON.stringify(bookArr));
      e.target.parentElement.remove();
    });
    book.appendChild(removeBtn);
    document.querySelector('.books-container').appendChild(book);
  }
}

addBtn.addEventListener('click', () => {
  const bookItem = new Book('\"' + titleInput.value + '\"', ' by ' + authorInput.value);
  bookItem.add();
  bookArr.push(bookItem);
  localStorage.setItem('books', JSON.stringify(bookArr));
});

if ('books' in localStorage) {
  bookArr = JSON.parse(localStorage.books);
  bookArr.forEach((each) => {
    const newData = new Book(each.title,  each.author);
    newData.add();
  });
}
