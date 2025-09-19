import express from 'express'
import {
  getAllBooks,
  getBookById,
  addBook,
  updateBookById,
  deleteBook,
} from "../controller/bookController.js";

const router = express.Router()
// Get all books
router.get("/", getAllBooks);

//  Get single book by ID
router.get("/:id", getBookById);

//  Add new book
router.post("/", addBook);

//  Update book
router.put("/:id", updateBookById);

//  Delete book
router.delete("/:id", deleteBook);




export default router