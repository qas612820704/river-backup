import { Router } from 'express';
import Book from '../models/Book';

const router = Router();

router.get('/', async (req, res) => {
  const books = await Book.find({}).sort('-createAt');
  return res.json({ result: books});
});

router.post('/', async (req, res) => {
  try {
    const bookRawData = req.body;
    const book = new Book({
      ...bookRawData,
      createById: req.user.sub,
    });

     const newBook = await book.save();

     return res.json({ result: newBook });
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

export default router;
