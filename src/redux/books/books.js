const CREATE_BOOK = 'books/books/ADD_BOOK';
const REMOVE_BOOK = 'books/books/REMOVE_BOOK';

export function addBook(book) {
  return {
    type: CREATE_BOOK,
    payload: book,
  };
}

export function deleteBook(book) {
  return {
    type: REMOVE_BOOK,
    payload: book,
  };
}

const initialState = [];

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);

    default:
      return state;
  }
}
