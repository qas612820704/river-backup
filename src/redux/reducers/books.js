const ADD_BOOK = 'ADD_BOOK';

const book = (state = {}, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return (action.payload.id === state.id) ? action.payload : state;
    default:
      return state;
  }
}

const books = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        book(undefined, action),
      ];
    default:
      return state;
  }
}

export function addBook(book)  {
  return {
    type: ADD_BOOK,
    payload: book,
  }
}

export function getBooks() {
  return async (dispatch, getState, api) => {
    const books = await api.fetchBooks();

    books.forEach(book => dispatch(addBook(book)));

    return books;
  }
}

export default books;
