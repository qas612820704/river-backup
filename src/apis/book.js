import axios from './ultis/axios';
import * as debug from '../logger';

export async function fetchBooks() {
  const response = await axios.get('/books');
  const books = response.data.result;

  return books;
}
