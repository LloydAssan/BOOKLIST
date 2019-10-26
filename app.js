//Book construtor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI Construtor
function UI(){}

//add Book to list
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');

  //create tr Element
  const row = document.createElement('tr');

  //insert cols
  row.innerHTML =`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='delete'>X</a></td>
  `;

  list.appendChild(row);
};

//Show Alert
UI.prototype.showAlert = function(message, className){
  //Create div
  const div = document.createElement('div')
  //Add class
  div.className = `alert ${className}`;
  //Add text
  div.appendChild(document.createTextNode(message));
  //Get parent
  const container = document.querySelector('.container');
  //Get form
  const form = document.querySelector('#book-form');
  //Insert alert
  container.insertBefore(div, form);

  //Time out after 3 section
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
}

UI.prototype.clearfields = function(){
  document.getElementById('title').value = ''
  document.getElementById('author').value = ''
  document.getElementById('isbn').value = ''
}

//Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  //add the input from form
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const isbn = document.getElementById('isbn').value


  //instantiate new object from Book constructor
  const book = new Book(title, author, isbn);

  //instantiate new object from UI constructor
  const ui = new UI();

  //Validate
  if(title === '' || author === '' || isbn === ''){
    //error alert
  ui.showAlert('Please fill in all fields', 'error')
  }else {
    //add book to list
    ui.addBookToList(book);

    //show success
    ui.showAlert('Book Added!', 'success');

    //clearfields
    ui.clearfields();
  }

  e.preventDefault();
});
