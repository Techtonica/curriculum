//let book;
// UPDATE METHOD
const updateBook = async (id) => {
  const response = await fetch(`http://localhost:8080/book/${id}`);

  const book = await response.json();

  //console.log(book);

  const { title, author, isbn, format } = book;

  // Filling information about the book in the form inside the modal
  document.getElementById("isbn").value = isbn;
  document.getElementById("title").value = title;
  document.getElementById("author").value = author;
  document.getElementById("format").value = format;

  // Setting up the action url for the book
  document.getElementById("form").action = `http://localhost:8080/book/${id}`;
};

// DELETE METHOD
const deleteBook = async (id) => {
  const response = await fetch(`http://localhost:8080/book/${id}`, {
    method: "DELETE"
  });

  const data = await response.json();
  alert(data.message);
  if (response.ok) {
    // Reloading the page
    location.reload();
  }
};

// GET Method
const showBooks = async () => {
  const URL = "http://localhost:8080/api/books";
  const response = await fetch(URL);
  const responseBooks = await response.json();

  //console.log(responseBooks);
  for (let book of responseBooks) {
    const card = `<div class="col-4">
        <div class="card">
        <div class="card-body"
        <h5 class="card-title">${book.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${book.isbn}</h6>

        <div>Author: ${book.author}</div>
        <div>Publisher: ${book.format}</div>
        

        <hr>

        <button type="button" class="btn btn-danger" onclick="deleteBook(${book.id})">Delete</button>
        <button types="button" class="btn btn-primary" data-toggle="modal"
            data-target="#editBookModal" onClick="updateBook(${book.id})">
            Edit
        </button>
        </div>
        </div>
        </div>`;
    document.getElementById("books").innerHTML =
      document.getElementById("books").innerHTML + card;
  }
};

showBooks();
