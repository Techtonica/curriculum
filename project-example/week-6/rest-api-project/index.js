import express from "express";
import cors from "cors";
import books from "./books.js";
import path from "path";

const app = express();
const PORT = 8080;

// parse JSON
app.use(express.json());
// parse URL encoded data
app.use(express.urlencoded({ extended: true }));

// Configuring cors middleware
app.use(cors());

// to let the server know what directory are we working on
const __dirname = path.resolve();

app.use(express.static("client"));

// api/books
// create an endpoint the /api/book endpoint - Get request

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

// Adding Books
app.post("/book", (req, res) => {
  const id = books.length + 1;
  const newBook = req.body;
  newBook.id = id;
  // console.log(newBook);
  books.push(newBook);
  return res.redirect("/");
});

// Retrieving a Book by id
app.get("/book/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    //  console.log(id);
    const book = books.find((book) => book.id === id);
    console.log(book);
    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    return res.json(book);
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve book",
    });
  }
});

// Editing Books
app.post("/book/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    // console.log(id);
    const book = books.find((book) => book.id === id);
    console.log(book);
    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
    const bookIDX = books.indexOf(book);

    books[bookIDX] = { ...book, ...req.body };

    res.redirect("/");
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve book",
    });
  }
});
// DELETE BOOK

app.delete("/book/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    const bookIDX = books.findIndex((book) => book.id === id);
    console.log(bookIDX);
    if (bookIDX < 0) {
      return res.status(404).json({
        message: "book not found",
      });
    }
    books.splice(bookIDX, 1);
    res.status(200).json({
      message: "Book was successfully deleted from my library",
      books,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete book",
    });
  }
});

app.listen(PORT, () => console.log(`HOLA!, server running at ${PORT}`));
