import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import books from './books';

export default combineReducers({
  auth,
  user,
  books,
});
